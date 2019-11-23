const express = require('express');
const Schemes = require('./resourceModel');
const router = express.Router();

router.get("/", (req, res) => {
  Schemes.find()
    .then(resources => {
      res.status(200).json({resources})
    })
    .catch(err => {
      res.status(500).json({message: "server error", error: err})
    })
})

router.post("/", (req, res) => {
  Schemes.add(req.body)
    .then(resource => {
      res.status(200).json({resource})
    })
    .catch(err => {
      res.status(500).json({message: "server error", error: err})
    })
})


module.exports = router