const port = '8100';
const http = require('http');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const express = require('express');
const uuidv4 = require('uuid/v4');
openSessions = {}; // To hold open sessions

const app = express();

const db = require('./db/db.js');
const creds = require('./db/creds.js');
const collection = "water";

// CORS Handler
app.use(creds.handleCORS);

app.use('/', express.static(__dirname + '/dist/Hackathon'));
app.set('views', __dirname + '/dist/Hackathon'); // Set views (index.html) to root directory
app.engine('html', ejs.renderFile); // Default for express is Jade as the rendering engine. Change that to EJS for HTML over JADE
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true,
    limit: '1000mb'
}));

// Receive and process Login request - GET
app.get('/login', (req, res) => {
	// console.log(req.query.username, req.query.password);
	let result = {
		status: '',
		sessionId: ''
	};
	if (req.query.username === creds.username && req.query.password === creds.password) {
		result.status = 'Success';
		result.sessionId = uuidv4();
		openSessions[result.sessionId] = Date.now();
	} else {
		result.status = 'Error';
	}
	res.write(JSON.stringify(result));
    res.end();	
});

//CRUD Operations
//POST Data
app.post('/postData', (req,res)=>{
	const userInput = req.body;
	db.getDB().collection(collection)
	.insertOne(userInput,(err,result)=>{
		if(err)
			console.log(err)

		else{
				res.json({
					result,
					document : result.ops[0]
				});
		}	
	});
});

//GET Data
app.get('/getData',(req,res)=>{
	db.getDB().collection(collection).find({})
		.toArray((err,docs)=>{
			if(err)
				console.log(err);
			else
				res.json(docs);
			
		});
});

//GET request for State
app.get('/getData/:state',(req,res)=>{
	var State = req.params.state;
	db.getDB().collection(collection).find(
		{state : State})
		.toArray((err,docs)=>{
			if(err)
				console.log(err);
			else
				res.json(docs);
		});
});

//GET request for City
app.get('/getData/:state/:city',(req,res)=>{
	var State = req.params.state;
	var City = req.params.city;
	db.getDB().collection(collection).find(
		{state : State,
		 city : City})
		.toArray((err,docs)=>{
			if(err)
				console.log(err);
			else
				res.json(docs);
		});
});

//UPDATE Data
app.put('/:id', (req,res)=>{
	const ID = req.params.id;
	const userInput = req.body;

	db.getDB().collection(collection).findOneAndUpdate(
		{_id : db.getPrimaryKey(ID)},
		{$set : {cost_for_water_usage : userInput.cost_for_water_usage}},
		(err,result)=>{
			if(err)
				console.log(err);

			else
				res.json(result);
		}
	);
});

//DELETE Data
app.delete('/:id', (req,res)=>{
	const ID = req.params.id;

	db.getDB().collection(collection).findOneAndDelete(
		{_id : db.getPrimaryKey(ID)},
		(err,result)=>{
			if(err)
				console.log(err);

			else
				res.json(result);
		}
	);
});

//GET Percentage (total_treated_usage/total_usage)
app.get('/getPercentage',(req,res)=>{
	db.getDB().collection(collection).find()
		.toArray((err,docs)=>{
			if(err)
				console.log(err);
			else{
				var percentageJSON = {
					'Maharashtra' : 0
				};
				var stateJSON = {
					'Maharashtra' : {
						totalTreatedUsage : 0,
						totalUsage : 0						
					}
				};
					
				for(var i=0; i<docs.length; i++){
					var currentState=docs[i].state;

					if(stateJSON.hasOwnProperty(currentState)){
						// console.log('yep');
						// stateJSON.currentState.totalTreatedUsage+=docs[i].breakup_of_recycle.total_treated_used;
						stateJSON[currentState].totalTreatedUsage+=docs[i].breakup_of_recycle.total_treated_used;
						stateJSON[currentState].totalUsage+=docs[i].breakup_of_recycle.total_usage;
					} else{
						// console.log('nope');
						stateJSON[currentState]={
							totalTreatedUsage : docs[i].breakup_of_recycle.total_treated_used,
							totalUsage : docs[i].breakup_of_recycle.total_usage
						};
					}

					if(!percentageJSON.hasOwnProperty(currentState)){
						percentageJSON[currentState] = 0;
					}else{
						percentageJSON[currentState] = 
						(stateJSON[currentState].totalTreatedUsage/stateJSON[currentState].totalUsage)*100;
					}
				}
				console.log(stateJSON);
				res.json(percentageJSON);
			}
		});
});

//Establish Connection
db.connect((err)=>{
	if(err)
		console.log('Unable to Connect to Database');

	else{
		app.listen(port, ()=>{
			console.log(`Server up and Running on ${port}`);
		});
	}
});
