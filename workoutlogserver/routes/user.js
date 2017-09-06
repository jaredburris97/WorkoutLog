var router = require('express').Router();
var sequelize = require('../db.js');
var User = sequelize.import('../models/user');

router.post('/', function(req, res){	//changed app.post to router.post (module 10)

	var username = req.body.user.username;
	var pass = req.body.user.password;		//TODO: hash this pw
	// Need to create a user object and use sequelize to put it into the db
	User.create({
		username: username,
		passwordhash: ""		//TODO: make it hashed
	}).then(
	// Sequelize is going to return the object it created from db.
			function createSuccess(user){
				// Successful get this:
				res.json({
					user: user,
					message: 'created'
				});
			},
			function createError(err){
				res.send(500, err.message);
			}
		);
});

module.exports = router;