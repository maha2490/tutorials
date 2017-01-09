var express = require('express'); //bringing in the express library
var router = express.Router(); //router object of express library


//Route for home
router.get('/', function(req, res) {
  
	res.send(`
	      <h1>Welcome</h1>
	      <p>Roux Academy Meetups put together artists from all walks of life</p>
	`);
});

module.exports = router;