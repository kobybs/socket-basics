var socket = io();

socket.on('connect', function (){
	console.log('Connected to sockets.io server');
} );

socket.on('message', function(message){
	console.log('New message');
	console.log(message.text);
} );