const express = require('express');

const projectRouter = require("./data/projectRouter");
const resourceRouter = require("./data/resourceRouter");
const taskRouter = require("./data/taskRouter")
const server = express();

server.use(express.json());

server.use("/projects", projectRouter);
server.use("/resources", resourceRouter);
server.use("/tasks", taskRouter);

module.exports = server;