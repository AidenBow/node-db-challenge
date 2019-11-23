const express = require('express');

const projectRouter = require("./data/projectRouter.js");
const resourceRouter = require("./data/resourceRouter")
const server = express();

server.use(express.json());

server.use("/projects", projectRouter);
server.use("/resources", resourceRouter);

module.exports = server;