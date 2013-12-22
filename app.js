var express = require('express'),
	db = require('./db.js');
var app = express();

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
	res.send({one:2,two:3});
});


// example of async database interaction
(function(){
	db.newModel('aModel',{one:String,two:Number},function(){
		db.insert('aModel',{one:"sup",two:2},function(){
			db.update('aModel',{two:2},{one:"yolo"},function(){
				db.select('aModel',{two:2},function(data){
					console.log(data);		
				});
			});
		});
	});
})();


app.listen(8080,function(){
  console.log('Ready to go on port 8080');
});
