var express	= require('express'),
	products	= express.Router()
	products.route('/')
		.get(function(req, res) {
			res.json({'message':'display all products'})
		})
		.post(function(req,res) {
			res.json({'message': 'you created a product'})
		})
		.put(function(req, res) {
			res.json({'message':'you edited the products'})
		})
		.delete(function(req, res) {
			res.json({'message':'you deleted a product'})
		})

module.exports = products