var express = require('express');

var app = express();

//static listing of content
app.use(express.static(__dirname));

app.listen(3000);