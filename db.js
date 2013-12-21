var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
	mongoose.connect('mongodb://localhost/lean');

exports.getDB = function(){
	return mongoose;
};

exports.newModel = function(name,obj){
	// hope to include methods, s.t. obj would be in form of {methods:[],schema:[]}

	// obj should be of the form {key:type}
	var theSchema = new Schema(obj);
	return mongoose.model(name, theSchema);
	// var x = db.newSchema(blah,blah);
};

exports.getModel = function(name){
	return mongoose.model(name);
};

// can be called without having a model, otherwise could just .find and shit with the model
exports.loadModel = function(name,pred){
	var model = mongoose.model(name);
	model.find(pred,function(err,data){
		if(err){console.log(err);return false;}
		else return data;
	});
};

exports.addModel = function(name,vals){
	var model = mongoose.model(name);
	model.save(function(err){
		if(err){console.log(err);return false;}
		else return true;
	});
};

// want to add updating a model

exports.delModel = function(name,pred){
	var model = mongoose.model(name);
	model.remove(pred,function(err){
		if(err){console.log(err);return false;}
		else return true;
	});
};