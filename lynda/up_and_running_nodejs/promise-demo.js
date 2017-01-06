//using native promise library, not using bluebird

var promise = new Promise(function (resolve, reject) {
	resolve();
});

promise.then(function(){
	console.log('then');
});