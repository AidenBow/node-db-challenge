const express = require("express")
const server = express()
const projectRouter = require("./data/project_router")
const resourceRouter = require("./data/resource_router")
const taskRouter = require("./data/task_router")

server.use(express.json())
server.use("/projects", projectRouter)
server.use("/resources", resourceRouter)
server.use("/tasks", taskRouter)

module.exports = server