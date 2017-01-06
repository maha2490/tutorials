var fs = require('fs');

var tomString = '{"name": "tom"}';
var timmy = {
	name: "timmy"
}

fs.writeFile('tom.json', tomString);
fs.writeFile('timmy.json', JSON.stringify(timmy));