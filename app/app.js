var express = require('express');
var app = express();
var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000 );

//Route for home
app.get('/', function(req, res) {
  
	res.send(`
	      <h1>Welcome</h1>
	      <p>Roux Academy Meetups put together artists from all walks of life</p>
	`);
});

//Route for speakers
app.get('/speakers', function(req, res) {
	var info = '';
	dataFile.speakers.forEach(function (item) {
		info += `
			<li>
				<h2>${item.name}</h2>
				<p>${item.summary}</p>	
			</li>
		`; 
	});
  	res.send(`
  			<h1>Roux Academy Meetups</h1>
  			${info}
  		`);
});

//Route for a specific speaker
app.get('/speakers/:speakerid', function(req, res) {
	//    params is an object received by the request
	//										|
	//										| which takes the variable declared above
	//										|       |
	var speaker  = dataFile.speakers[req.params.speakerid];
  	res.send(`
  			<h1>${speaker.title}</h1>
  			<h2>with ${speaker.name}</h2>
  			<p>${speaker.summary}</p>
  		`);
});

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});


