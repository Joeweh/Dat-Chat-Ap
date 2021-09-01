const env = require('./env')
const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require("socket.io");
const io = new Server(server);
const port = env.PORT

app.use(express.static('public/login'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/login/login.html')
});

server.listen(port, () => {
    console.log('listening on *:3000')
});