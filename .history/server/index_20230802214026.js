const express = require('express');
const server = express();
const cors = require("cors");

const { Technology } = require("../models");

server.use(express.json());
server.use(express.static(__dirname + "/../public"));
server.use(cors());

server.get("/api/technologies", async (req, res) => {
    let technologies = await Technology.find();
    technologies = technologies.map((technology)=> {
        technology.logo = `${req.protocol}://${req.headers.host}/img/${technology.logo}`;
        return technology;
    });
    return res.send({error: false, data: technologies});
});

server.get("/api/technology/:id", async (req, res) => {
    const {id} = req.params;
    let technology = await Technology.findById(id);
        technology.logo = `${req.protocol}://${req.headers.host}/img/${technology.logo}`;
    return res.send({error: false, data: technology});
});

module.exports = server; 