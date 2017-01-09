//Main file

var express = require('express');
var reload = require('reload');
var app = express();
var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000 );
app.set('appData', dataFile);

//  static is "middlewear"
//					|
app.use(express.static('app/public')); //allows access to all files inside /public
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});


reload(server, app);

//to run the server type node app/app.js
//or with nodemon type nodemon app/app.js. can add in package.json file under scripts and use npm start command instead. "start": "node app/app.js" was orig code