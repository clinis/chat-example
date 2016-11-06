var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var users = [];

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  socket.on('envia nick', function(nick){
    io.emit('info', "New user: " + nick); console.log(nick);
    users.push(nick);
    io.emit('users list', users); console.log(users);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
