var koa = require('koa');

var app = koa();

app.use(function* () {  //koa generator function, denoted by *
	this.body = 'hello, world!';
});

app.listen(3000);