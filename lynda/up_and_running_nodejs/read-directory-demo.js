var fs = require('fs'); //file system object

fs.readdir('../up_and_running_nodejs', function(err, data) {
	console.log(data);
});