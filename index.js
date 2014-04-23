var express = require("express");
var app = require('express')();

var port = 3000;

app.use(express.static(__dirname + '/public'));
var io = require('socket.io').listen(app.listen(port));
console.log("Listening on port " + port);

app.set('views', __dirname + '/views');
app.set('view engine', "jade");
app.engine('jade', require('jade').__express);

app.get("/", function(req, res){
    res.render("page");
});


