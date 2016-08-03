
var io = require('socket.io').listen(3000);

io.sockets.on('connection', function (socket) {
        
    socket.on('command', function (data) { 
		console.log(data);       
	});
    socket.emit('Hello',"Hello bro!");
    console.log("Client connected");  
    
});