var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];

  data.speakers.forEach(function(item){
  	pagePhotos.concat(item.artwork);
  });

  res.render('index', {
  	pageTitle: 'Home',
  	artwork: pagePhotos,
  	pageID: 'home'
  }); //don't have to specify file type, bc express looks for a file starting with index
});

module.exports = router;
