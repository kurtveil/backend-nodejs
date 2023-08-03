const express = require('express');
const server = express();
const cors = require("cors");

const { Technology } = require("../models");

server.use(express.json());
server.use(express.static(__dirname + "/../public"));
server.use(cors());

server.get("/api/technologies", (req, res) => {

})

module.exports = server; 