var express	= require('express'),
	users	= express.Router()
	users.route('/')
		.get(function(req, res) {
			res.json({'message':'display all users'})
		})
		.post(function(req,res) {
			res.json({'message': 'you created a user'})
		})
		.put(function(req, res) {
			res.json({'message':'you edited the users'})
		})
		.delete(function(req, res) {
			res.json({'message':'you deleted a user'})
		})

module.exports = users