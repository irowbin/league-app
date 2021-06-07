//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/league-result'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/league-result/index.html'));
});
const port = process.env.PORT || 8080
const server = app.listen(port)

console.log(`app is listening on port: ${port}`)

const io = require('socket.io')(server);


// endpoints
io.on('connection', (socket) => {
  socket.on('SYNC_LEAGUE', (data) => {
    console.log('league result synced: ', data)
    socket.broadcast.emit('LEAGUE_SYNCED', data);
  });

  socket.on('disconnect', () => {
    console.log('disconnected')
  });
});
