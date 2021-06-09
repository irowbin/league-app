const express = require('express');
// const cors = require('cors')
const app = express();
//allow OPTIONS on all resources
// app.use(cors({
//   origin: 'http://localhost:4200'
// }));
const server = app.listen(3000);

app.get('/', (req, res) => {
  res.send(`Hi! Server is listening on port ${3000}`);
});

// register socket with enabling cors
const io = require('socket.io')(server, {
  cors: {
    // allowed origin
    origin: 'http://localhost:4200',
    // to any method
    methods: '*'
  }
});

// endpoints
io.on('connection', (socket) => {
  socket.on('SYNC_LEAGUE', (data) => {
    console.log('league result synced: ', data);
    socket.broadcast.emit('LEAGUE_SYNCED', data);
  });

  socket.on('disconnect', () => {
    console.log('disconnected');
  });
});
