'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
export {io};

import socketManager from './socketManager/socketManager';

const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('./public'));

io.on('connection', socketManager);

/*
app.post('/', (req, res) => {
    const {Body, From} = req.body;
    const message = {
        body: Body,
        from: From.slice(8),
    };
    io.emit('message', message);
    res.send(`Thanks for msg`)
});*/

let users = [];
let sockets = {};

server.listen(PORT, (error) => {
    if (error) console.error(error);
    console.log(`Listen on port: ${PORT}...`);
});
