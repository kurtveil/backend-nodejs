const express = require('express');
const server = express();
const cors = require("cors");

server.use(express.json());
server.use(express.static(__dirname + "/../public"));
server.use(cors());
module.exports = server; 