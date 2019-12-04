const express = require('express');
const router = express.Router();

const scheme = require('./resource_model');

router.post("/", (req,res) => {
  scheme.add(req.body)
  .then(resources => {
    res.status(200).json(resources)
  })
  .catch(err => {
    res.status(500).json({message: "server error", error:err})
  })
})

router.get("/", (req,res) => {
  scheme.find()
  .then(resources => {
    res.status(200).json(resources)
  })
  .catch(err => {
    res.status(500)/json({message: "server error", error:err})
  })
})

module.exports = router