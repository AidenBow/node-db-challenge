const express = require('express');
const router = express.Router();

const scheme = require('./project_model');

router.get("/", (req,res) => {
  scheme.find()
  .then(projects => {
    res.status(200).json(projects)
  })
  .catch(err => {
    res.status(500).json({message: "server error", error:err})
  })
})

module.exports = router