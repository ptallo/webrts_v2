//Imports
'use strict';
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var Game = require('./server/Game.js');

const PORT = 8080;

//Configuration
app.use(express.static(__dirname + '/client'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){

});

http.listen(PORT, function(){
    console.log('listening on *: ' + PORT);
});
