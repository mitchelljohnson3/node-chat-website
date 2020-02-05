const socket = io('http://localhost');

socket.on('chat-message', data => {
    console.log(data);
})