const express = require('express');
const router = express.Router();

const scheme = require('./task_model');

router.get("/", (req,res) => {
  scheme.find()
  .then(tasks => {
    res.status(200).json(tasks)
  })
  .catch(err => {
    res.status(500).json({message: "server error", error:err})
  })
})

module.exports = router