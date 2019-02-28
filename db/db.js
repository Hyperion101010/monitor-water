const {MongoClient} = require('mongodb');
const {ObjectID} = require('mongodb');//es6 Destructuring
const dbName = "groundwater";
const url = 'mongodb+srv://hyperion101010:hyperion101010@cluster0-2y3cu.mongodb.net';
const mongoOptions = {
	useNewUrlParser : true
};

const state = {
	db : null
};

const connect = (cb)=>{
	if(state.db)
		cb();
	else{
		 MongoClient.connect(url,mongoOptions,(err,client)=>{
		 	if(err)
		 		cb(err);
		 	else{
		 		state.db = client.db(dbName);
		 		cb();
		 		console.log('Connected to DatabaseCloud');
		 	}
		});
	}	
}

const getPrimaryKey = (_id)=>{
	return ObjectID(_id);
}

//returns client.db(dbName)
const getDB = ()=>{
	return state.db;
}

module.exports = {getDB, connect, getPrimaryKey};
