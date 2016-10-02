var sp = require('serialport');
var io = require('socket.io').listen(3000); //listen port

var SP = sp.SerialPort;

var led_status = 0;

var port = new SP('COM3',{
    baudRate:9600,
    parser: sp.parsers.raw
});

port.on('open', portconnect);
port.on('data',senddata);

function portconnect(){
    console.log('connected to COM3');
}

function senddata(data){
    
    console.log(data);
}

io.sockets.on('connection', function (socket) {
    
    socket.on('message', function (msg) { 
		port.write(msg); 
        socket.broadcast.emit('led_status',msg);       
	});
    socket.emit('led_status',led_status);  
});
