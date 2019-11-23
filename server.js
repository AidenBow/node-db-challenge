const express = require('express');

const projectRouter = require("./data/projectRouter.js");

const server = express();

server.use(express.json());

server.use("/projects", projectRouter);

module.exports = server;