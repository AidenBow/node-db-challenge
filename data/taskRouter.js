const express = require('express');
const Schemes = require('./taskModel');
const router = express.Router();

router.get("/", (req, res) => {
  Schemes.find()
    .then(tasks => {
      tasks.forEach(task => {
        return task.completed ? task.completed = true : task.completed = false;
      })
      res.status(200).json({tasks})
    })
    .catch(err => {
      res.status(500).json({message: "server error", error: err})
    })
})

router.post("/", (req, res) => {
  Schemes.add(req.body)
    .then(taskInfo => {
      res.status(200).json({taskInfo})
    })
    .catch(err => {
      res.status(500).json({message: "server error", error: err})
    })
})

module.exports = router