const express = require('express')()
const http = require('http').createServer(express)
const io = require('socket.io')(http)

express.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', function(socket){
  console.log('a user connected')
})

http.listen(3000, function(){
  console.log('listening on *:3000')
})