const path = require('path');
const express = require('express');
const cors = require('cors');
const mainRouter = require('../router/main');
const dataRouter = require( '../router/data');

const server = express();


server.use(express.static(path.join (__dirname + '../public')));

server.use(cors());

server.use('/main', mainRouter);
server.use('/data', dataRouter);

server.listen(8000, () => {console.log('Server run port 8000')});
