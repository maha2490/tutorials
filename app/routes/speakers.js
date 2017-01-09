var express = require('express'); //bringing in the express library
var router = express.Router(); //router object of express library



//Route for speakers
router.get('/speakers', function(req, res) {
	var info = '';
	var dataFile = req.app.get('appData');
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
router.get('/speakers/:speakerid', function(req, res) {
	//    params is an object received by the request
	//										|
	//										| which takes the variable declared above
	//										|       |
	var dataFile = req.app.get('appData');
	var speaker  = dataFile.speakers[req.params.speakerid];
  	res.send(`
  			<h1>${speaker.title}</h1>
  			<h2>with ${speaker.name}</h2>
  			<p>${speaker.summary}</p>
  		`);
});

module.exports = router;