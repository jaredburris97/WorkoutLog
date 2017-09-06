var express = require('express');
var app = express();
var bodyParser = require('body-parser'); // added in module 7
var sequelize = require('./db.js');		// added in module 9

var User = sequelize.import('./models/user');
//Create table
User.sync();	//User.sync({force:true});	//WARNING: THIS DROPS(DELETES) USER TABLE

app.use(bodyParser.json());
app.use(require('./middleware/headers'));
app.use('/api/user',require('./routes/user'))
app.use('/api/test', function(req,res){
	res.send('Hello World, from server app.js!')
});
//sequelize code cut to db.js file (module 9)
app.listen(3000, function(){
	console.log("...App is listening (open) on 3000...");
});
//app.post code cut to user.js in routes folder (module 10)