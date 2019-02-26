const port = '8100';
const http = require('http');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

const db = require('./db/db.js');
const collection = "water";

app.use('/', express.static(__dirname + '/dist/Hackathon'));
app.set('views', __dirname + '/dist/Hackathon'); // Set views (index.html) to root directory
app.engine('html', ejs.renderFile); // Default for express is Jade as the rendering engine. Change that to EJS for HTML over JADE
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true,
    limit: '1000mb'
}));

// Receive and process Twilio responses - GET
app.get('/login', (req, res) => {
    console.log(req.query.email, req.query.password);
    res.write('Success');
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

