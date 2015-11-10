var express	= require('express'),
	app		= express(),
	port 	= process.env.PORT || 3000,
	fs		= require('fs'),
	logger	= require('morgan'),
	accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'}),
	router 	= express.Router(),
	users	= require('./routes/users.js'),
	products = require('./routes/products.js')

app.use(logger("combined", {stream: accessLogStream}))

router.get('/', function(req, res) {
	res.json({'message': 'This is the home page'})
})

app.use('/', router)
app.use('/users', users)
app.use('/products', products)
app.listen(port)
console.log('Server started on', port)