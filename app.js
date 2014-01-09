// modules used by our app
var express = require('express'),
	db = require('./db.js');
var app = express();

// express boilerplate, initializes environment and middleware
app.set('views','views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.static('public'));

// example of loading a simple dynamically generated page
app.get('/',function(req,res){
	// these variables passed in with ng-init
	res.render('index',{title:'lean-mean',vars:{one:1,two:2}});
});

// example of sending the result of an ajax call
app.get('/load-vars',function(req,res){
	// these variables passed via ajax calls
	res.send({one:2,two:3,three:4});
});

// example of database interaction
db.init(function(objs){

	objs.insert( {a:1} ,function(){	
		objs.find( {a:1} ).toArray(function (err,result) {
			console.log(result);
			objs.remove( {a:1} ,function (err,result) {
				console.log('removed '+result+' object');
			});
		});
	});

});

app.listen(3000,function(){
  console.log('Ready to go on port 3000');
});
