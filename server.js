var http = require('http');
var express = require("express")
var socketIO = require('socket.io')
var path = require('path')
const game2DEngine = require('./core/2DGame')
var app = express()


var server = http.Server(app)

var io = socketIO(server)

var gameEngine = new game2DEngine();

app.use('/handlers', express.static(__dirname + '/handlers'));// Routing

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'index.html'));
  });


io.sockets.on('connection',function(socket){
  console.log("Connected")
  socket.emit("message","Welcome to the server")

  socket.on('disconnect',function(){
    console.log("Disconnected")
    gameEngine.removePlayer(socket.id)
  })

  socket.on('new-user',function(nickname){
    console.log(socket.id+" is "+nickname)
    gameEngine.newPlayer(socket.id,nickname)
  })

  socket.on('move',function(movement){
    gameEngine.move(socket.id,movement)
  })

  setInterval(()=>{
    socket.emit("updatePlayers",gameEngine.players)
  },1000/60)
  
})






/* io.sockets.on("chat",(message)=>{
  console.log("messagge")
  alert("You are logged in "+ message)
}) */

server.listen(8080);