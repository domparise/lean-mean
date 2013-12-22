var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
	mongoose.connect('mongodb://localhost/leanDB');

exports.getDB = function(cb){
	return cb(mongoose);
};

exports.newModel = function(name,obj,cb){
	// hope to include methods, s.t. obj would be in form of {methods:[],schema:[]}
	// obj should be of the form {key:type}
	var theSchema = new Schema(obj);
	return cb(mongoose.model(name, theSchema));
};

exports.getModel = function(name,cb){
	return cb(mongoose.model(name));
};

exports.insert = function(name,vals,cb){
	(new (mongoose.model(name))(vals)).save(function(err){
		if(err){console.log(err);return cb(false);}
		else return cb(true);
	});
};

exports.select = function(name,pred,cb){
	mongoose.model(name).find(pred,function(err,data){
		if(err){console.log(err);return cb(false);}
		else return cb(data);
	});
};

exports.update = function(name,pred,vals,cb){
	mongoose.model(name).update(pred,vals,function(err){
		if(err){console.log(err);return cb(false);}
		else return cb(true);
	});
};

exports.delete = function(name,pred,cb){
	mongoose.model(name).remove(pred,function(err){
		if(err){console.log(err);return cb(false);}
		else return cb(true);
	});
};