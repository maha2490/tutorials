var express = require('express');

var app = express();

var fs = require('fs'); 


//dynamic listing of content
app.use('/message', function(req, res) {
	console.log("there was a user request endpoint");
	res.send('hello');
})

app.use('/users', function(req, res){
	fs.readFile('./data1.json', 'utf-8', function(err, data) {
		res.send(data);
	});
});

app.listen(3000);