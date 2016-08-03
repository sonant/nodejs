var sp = require('serialport');
var io = require('socket.io').listen(3000);

var SP = sp.SerialPort;

var led_status = 0;




function portconnect(){
    console.log('connected to COM3');
}

function senddata(data){
    led_status=data;
}

io.sockets.on('connection', function (socket) {
    
    socket.on('message', function (msg) { 
		port.write(msg); 
        socket.broadcast.emit('led_status',msg);       
	});
    socket.emit('led_status',led_status);  
});