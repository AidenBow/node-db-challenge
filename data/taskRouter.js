const express = require('express');
const Schemes = require('./taskModel');
const router = express.Router();

router.get("/", (req, res) => {
  Schemes.find()
    .then(tasks => {
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