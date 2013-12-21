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

app.get('/',function(req,res){
	// these variables passed in with ng-init
	res.render('index',{title:'lean-mean',vars:{one:1,two:2}});
});

app.get('/load-vars',function(req,res){
	// these variables passed via ajax calls
	res.send({one:2,two:3});
});

app.listen(8080,function(){
  console.log('Ready to go on port 8080');
});
