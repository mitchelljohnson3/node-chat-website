const express = require('express')()
const http = require('http').createServer(express)
const io = require('socket.io')(http)

// =============================================
// send files to client
express.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
})
express.get('/assets/style.css', function(req, res){
  res.sendFile(__dirname + '/assets/style.css')
})
express.get('/assets/client.js', function(req, res){
  res.sendFile(__dirname + '/assets/client.js')
})
// ==============================================

//handles all client responses
io.on('connection', function(socket){
  //identifies new user
  console.log('New User')
  socket.emit('chat-message', 'Welcome!')
  //client responses
  socket.on('send-chat-message', (data) => {
    socket.broadcast.emit('new-message', data)
  })
})
//confirms server is listening on the right port
http.listen(3000, function(){
  console.log('listening on *:3000')
})