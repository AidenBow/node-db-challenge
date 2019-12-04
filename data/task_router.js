const express = require('express');
const router = express.Router();

const scheme = require('./task_model');

router.post("/", (req,res) => {
  scheme.add(req.body)
  .then(task => {
    res.status(200).json(task)
  })
  .catch(err => {
    res.status(500).json({message: "server error", error:err})
  })
})

router.get("/", (req,res) => {
  scheme.find()
  .then(tasks => {
    tasks.forEach(task => {
      return task.completed ? task.completed = true : task.completed = false;
    })
    res.status(200).json(tasks)
  })
  .catch(err => {
    res.status(500).json({message: "server error", error:err})
  })
})

module.exports = router