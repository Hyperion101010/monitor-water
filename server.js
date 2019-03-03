const port = '8100';
const http = require('http');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const express = require('express');
const uuidv4 = require('uuid/v4');
const moment = require('moment');
const app = express();

openSessions = {}; // To hold open sessions

const db = require('./db/db.js');
const mail = require('./sendGmail.js');
const creds = require('./db/creds.js');
const collection = "noc";

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
app.post('/postData', (req, res) => {
	const userInput = req.body;
	db.getDB().collection(collection)
		.insertOne(userInput, (err, result) => {
			if (err)
				console.log(err)

			else {
				res.json({
					result,
					document: result.ops[0]
				});
			}
		});
});

app.post('/postDataIndustry', (req,res)=>{
	const userInput = req.body;
	db.getDB().collection('industry')
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
app.get('/getData', (req, res) => {
	db.getDB().collection(collection).find({})
		.toArray((err, docs) => {
			if (err)
				console.log(err);
			else
				res.json(docs);

		});
});

//GET request for State
app.get('/getData/:state', (req, res) => {
	var State = req.params.state;
	db.getDB().collection(collection).find({
			state: State
		})
		.toArray((err, docs) => {
			if (err)
				console.log(err);
			else
				res.json(docs);
		});
});

//GET request for City
app.get('/getData/:state/:city', (req, res) => {
	var State = req.params.state;
	var City = req.params.city;
	db.getDB().collection(collection).find({
			state: State,
			city: City
		})
		.toArray((err, docs) => {
			if (err)
				console.log(err);
			else
				res.json(docs);
		});
});

//UPDATE Data
app.put('/:id', (req, res) => {
	const ID = req.params.id;
	const userInput = req.body;

	db.getDB().collection(collection).findOneAndUpdate({
			_id: db.getPrimaryKey(ID)
		}, {
			$set: {
				cost_for_water_usage: userInput.cost_for_water_usage
			}
		},
		(err, result) => {
			if (err)
				console.log(err);

			else
				res.json(result);
		}
	);
});

//DELETE Data
app.delete('/:id', (req, res) => {
	const ID = req.params.id;

	db.getDB().collection(collection).findOneAndDelete({
			_id: db.getPrimaryKey(ID)
		},
		(err, result) => {
			if (err)
				console.log(err);

			else
				res.json(result);
		}
	);
});

// sendMail Dummy service
app.get('/sendMail', (req, res) => {
	mail.sendMail(req.query.to);
});

// checkUsageDefaulters - groundwater.water.consumption / total_water_req
app.get('/checkUsageDefaulters', (req, res) => {
	var state = req.query.state;
	var city = req.query.city;

	var query = {};

	if (state) {
		if (state !== '') {
			query.state = state;
		}
	}
	if (city) {
		if (city !== '') {
			query.city = city;
		}
	}

	var defaulters = [];

	db.getDB().collection('usageConfig').find()
		.toArray((err, docs) => {
			if (err)
				console.log(err);
			else {
				var warningLimit = docs[0].warningLimit;
				var alertLimit = docs[0].alertLimit;
				var totals = [{
					'name': 'Critical',
					'value': 0
				}, {
					'name': 'Semi Critical',
					'value': 0
				}, {
					'name': 'Safe',
					'value': 0
				}];
				// console.log(warningLimit, alertLimit);
				db.getDB().collection('telemetry').find(query).project({
						"_id": 0,
						"consumption": 1,
						"total_water_req": 1,
						"name_of_industry": 1,
						"state": 1,
						"city": 1,
						"email": 1,
						"mobile": 1
					})
					.forEach((doc) => {
						var ratio = doc.consumption / doc.total_water_req;
						// console.log(ratio);
						if (ratio > warningLimit && ratio < alertLimit) {
							// console.log(ratio, doc, 'warning');
							doc.status = 'warning';
							defaulters.push(doc);
							++totals[1].value;
							if (creds.emailWhiteList.includes(doc.email)) {
								mail.sendMail(doc.email);
							}
						} else if (ratio > warningLimit && ratio < alertLimit) {
							// console.log(ratio, 'alert');
							doc.status = 'alert';
							defaulters.push(doc);
							++totals[2].value;
							if (creds.emailWhiteList.includes(doc.email)) {
								mail.sendMail(doc.email);
							}
						} else {
							doc.status = 'normal';
							defaulters.push(doc);
							++totals[0].value;
							if (creds.emailWhiteList.includes(doc.email)) {
								console.log(doc.email, 'ignored for normal');
							}
						}
					}, function (err) {
						// done or error
						res.json({
							'defaulters': defaulters,
							'totals': totals
						});
					});
			}
		});
});

//GET UsageConfig - warningLimit, alertLimit
app.get('/getUsageConfig', (req, res) => {
	db.getDB().collection('usageConfig').find()
		.toArray((err, docs) => {
			if (err)
				console.log(err);
			else {
				res.json(docs);
			}
		});
});

//SET UsageConfig - warningLimit, alertLimit
app.get('/setUsageConfig', (req, res) => {
	var warningLimit = req.query.warningLimit;
	var alertLimit = req.query.alertLimit;
	// console.log('setUsageConfig', warningLimit, alertLimit);
	db.getDB().collection('usageConfig').findOneAndUpdate({}, {
			$set: {
				'warningLimit': warningLimit,
				'alertLimit': alertLimit
			}
		},
		(err, result) => {
			if (err)
				console.log(err);
			else
				res.json(result);
		}
	);
});

//GET Percentage (total_treated_usage/total_usage)
app.get('/getPercentage', (req, res) => {
	db.getDB().collection(collection).find()
		.toArray((err, docs) => {
			if (err)
				console.log(err);
			else {
				var percentageJSON = {
					'Maharashtra': 0
				};
				var stateJSON = {
					'Maharashtra': {
						totalTreatedUsage: 0,
						totalUsage: 0
					}
				};

				for (var i = 0; i < docs.length; i++) {
					var currentState = docs[i].state;

					if (stateJSON.hasOwnProperty(currentState)) {
						stateJSON[currentState].totalTreatedUsage += docs[i].breakup_of_recycle.total_treated_used;
						stateJSON[currentState].totalUsage += docs[i].breakup_of_recycle.total_usage;
					} else {
						stateJSON[currentState] = {
							totalTreatedUsage: docs[i].breakup_of_recycle.total_treated_used,
							totalUsage: docs[i].breakup_of_recycle.total_usage
						};
					}

					if (!percentageJSON.hasOwnProperty(currentState)) {
						percentageJSON[currentState] = 0;
					} else {
						percentageJSON[currentState] =
							(stateJSON[currentState].totalTreatedUsage / stateJSON[currentState].totalUsage) * 100;
					}
				}
				res.json(percentageJSON);
			}
		});
});

//GET NOC Validity
app.get('/nocValidity', (req, res) => {
	db.getDB().collection(collection).find({})
		.toArray((err, docs) => {
			if (err)
				console.log(err);
			else {
				var expiredCount = 0,
					safeCount = 0,
					renewCount = 0;
				for (var i = 0; i < docs.length; i++) {
					var d1 = moment(`${docs[i].date.year}-${docs[i].date.month}-${docs[i].date.day}`);
					var d2 = moment();
					var days = d2.diff(d1, 'days');
					if (days >= 915 && days < 1095) {
						renewCount++;
					} else if (days >= 1095) {
						expiredCount++;
					} else {
						safeCount++;
					}
				}

				var nocValidityArr = [{
						property: 'expiredCount',
						value: expiredCount
					},
					{
						property: 'renewCount',
						value: renewCount
					},
					{
						property: 'safeCount',
						value: safeCount
					}
				];
				res.json(nocValidityArr);
			}

		});

});

app.get('/getQuantum', (req, res) => {
	db.getDB().collection(collection).find({})
		.toArray((err, docs) => {
			if (err)
				console.log(err);
			else {
				var criticalCount = 0,
					semiCriticalCount = 0,
					safeCount = 0;

				for (var i = 0; i < docs.length; i++) {
					var quanta = (docs[i].breakup_of_recycle.total_treated_used / docs[i].breakup_of_recycle.total_usage) * 100;
					if (quanta >= 40 && quanta <= 50) {
						safeCount++;
					} else if (quanta > 50 && quanta <= 60) {
						semiCriticalCount++;
					} else {
						criticalCount++;
					}
				}
				var nocValidityArr = [{
						property: 'criticalCount',
						value: criticalCount
					},
					{
						property: 'semiCriticalCount',
						value: semiCriticalCount
					},
					{
						property: 'safeCount',
						value: safeCount
					}
				];
				res.json(nocValidityArr);
			}
		});
});

app.get('/getQuantum/:state', (req, res) => {
	var State = req.params.state;
	db.getDB().collection(collection).find({
			state: State
		})
		.toArray((err, docs) => {
			if (err)
				console.log(err);
			else {
				var criticalCount = 0,
					semiCriticalCount = 0,
					safeCount = 0;

				for (var i = 0; i < docs.length; i++) {
					var quanta = (docs[i].breakup_of_recycle.total_treated_used / docs[i].breakup_of_recycle.total_usage) * 100;
					if (quanta >= 40 && quanta <= 50) {
						safeCount++;
					} else if (quanta > 50 && quanta <= 70) {
						semiCriticalCount++;
					} else {
						criticalCount++;
					}
				}
				var nocValidityArr = [{
						property: 'criticalCount',
						value: criticalCount
					},
					{
						property: 'semiCriticalCount',
						value: semiCriticalCount
					},
					{
						property: 'safeCount',
						value: safeCount
					}
				];
				res.json(nocValidityArr);
			}
		});
});

app.get('/getNOC/:name', (req, res) => {
	var Name = req.params.name;
	db.getDB().collection('telemetry').find({
			name_of_industry: Name
		})
		.toArray((err, docs) => {
			if (err)
				console.log(err);
			else {
				var Day, Month, Year, timeGraphArray = [];
				for (var i = 0; i < docs.length; i++) {
					Day = docs[i].start_day_number;
					Month = docs[i].month_counter;
					Year = docs[i].current_year;
					var tempDate = {
						day: Day,
						month: Month,
						year: Year,
						value: docs[i].consumption
					}
					timeGraphArray.push(tempDate);
					// console.log(tempDate);
				}
				// console.log(timeGraphArray);
				res.json(timeGraphArray);
			}
		});
});

// app.get('/getNOC/weekly/:name', (req,res)=>{
// 	var Name = req.params.name;
// 	db.getDB().collection('telemetry').find(
// 		{name_of_industry : Name})
// 		.toArray((err,docs)=>{
// 			if(err)
// 				console.log(err);
// 			else{



// 			}
// 	});
// });

app.get('/getNOCIndustry/:uniq', (req, res) => {
	var Uniq = req.params.uniq;
	db.getDB().collection('industry').find({
			uniq: Uniq
		})
		.toArray((err, docs) => {
			if (err)
				console.log(err);
			else {
				var industryArr = [{
						"name": "This Week",
						"series": []
					},
					{
						"name": "Previous Week",
						"series": []
					}
				];

				for (var i = docs.length - 1, j = i - 7, counter = 0; counter < 7; i--, j--) {
					var currentMonth = docs[i].month_counter;
					if((currentMonth==1) && docs[i].current_year==2018	){
						var temp1 = {
							name: `${docs[i].start_day_number}-0${docs[i].month_counter}`,
							value: docs[i].consumption
						};
						var temp2 = {
							name: `${docs[i].start_day_number}-0${docs[i].month_counter}`,
							value: docs[j].consumption
						};
						industryArr[0].series.push(temp1);
						industryArr[1].series.push(temp2);
						counter++;	
					}
				}
				res.json(industryArr);
			}
		});
});

app.get('/getNOCIndustry/monthly/:uniq', (req, res) => {
	var Uniq = req.params.uniq;
	db.getDB().collection('industry').find({
			uniq: Uniq
		})
		.toArray((err, docs) => {
			if (err)
				console.log(err);
			else {
				var industryArr = [{
						"name": "This Year",
						"series": []
					},
					{
						"name": "Previous Year",
						"series": []
					}
				];

				var Month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];

				for (var i = docs.length - 1, j = i - 7, counter = 0; counter < 12; i--, j--) {
					var currentDate = docs[i].start_day_number;
					if(currentDate==15){
						var temp1 = {							
							name: `${Month[docs[i].month_counter-1]} ${docs[i].current_year}`,
							value: docs[i].consumption
						};
						// var temp2 = {
						// 	name: `${docs[i].start_day_number}-0${docs[i].month_counter}`,
						// 	value: docs[j].consumption
						// };
						industryArr[0].series.push(temp1);
						// industryArr[1].series.push(temp2);
						counter++;	
					}
				}
				res.json(industryArr);
			}
		});
});

app.get('/getIndustryInfo/:uniq', (req,res)=>{
	var Uniq = req.params.uniq;
	db.getDB().collection('noc').find({
			uniq: Uniq
		})
		.toArray((err, docs) => {
			if (err)
				console.log(err);
			else {
				
				// for (var i = 0; i < docs.length; i++) {
				// 	var quanta = (docs[i].breakup_of_recycle.total_treated_used / docs[i].breakup_of_recycle.total_usage) * 100;
				// 	if (quanta >= 40 && quanta <= 50) {
				// 		safeCount++;
				// 	} else if (quanta > 50 && quanta <= 70) {
				// 		semiCriticalCount++;
				// 	} else {
				// 		criticalCount++;
				// 	}
				// }
				// res.json(docs);
				var industryInfo = {
					name : docs[0].name_of_industry,
					typeIndustry : docs[0].type_of_activity,
					typeStruct : docs[0].type_of_struct,
					HpPump : docs[0].hp_of_pump,
					avgDischarge : docs[0].discharge_of_struct,
					region : 'Safe'	
				};
				res.json(industryInfo);
			}
		})
});



//Establish Connection
db.connect((err) => {
	if (err)
		console.log('Unable to Connect to Database');

	else {
		app.listen(port, () => {
			console.log(`Server up and Running on ${port}`);
		});
	}
});