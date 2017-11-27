
var express = require('express');

var app = express();

app.get("/Url", function(req, res){
	var content = "success";
	res.send(content);
});

app.listen(80, function(){
	console.log("server is running @ 80 port");
});

