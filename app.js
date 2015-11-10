var express	= require('express'),
	app		= express(),
	port 	= process.env.PORT || 3000,
	fs		= require('fs'),
	logger	= require('morgan'),
	userArray = [{user: {id: 1, name: "Kate"}}, {user: {id: 2, name: "Tony"}}, {user: {id: 3, name: "Philippe"}}],
	accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'})

app.use(logger("combined", {stream: accessLogStream}))

app.get('/', function(req, res) {
	res.json({users: userArray})
})

app.get('/:id', function(req, res) {
	if (req.params.id - 1 >= userArray.length || req.params.id <= 0) {
		res.json({"message": 'User does not exist'})
	} else {
		var id = req.params.id - 1
		res.json(userArray[id])
	}
})

app.listen(port)
console.log('Server started on', port)