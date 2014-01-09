exports.init = function (cb) {
	// establish a connection to mongo 
	require('mongodb').MongoClient.connect('mongodb://localhost/leanDB', function (err,db) {
		if (err) throw err;
		// returns a database collection to be used once initialized
		return cb( db.collection('obj') );
	});
};