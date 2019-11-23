const express = require('express');
const Schemes = require('./projectModel');
const router = express.Router();

router.get("/", (req, res) => {
  Schemes.find("projects")
    .then(projects => {
      res.status(200).json({projects})
    })
    .catch(err => {
      res.status(500).json({message: "server error", error: err})
    })
})

router.post("/", (req, res) => {
  Schemes.add("projects", req.body)
    .then(project => {
      res.status(200).json({project})
    })
    .catch(err => {
      res.status(500).json({message: "server error", error: err})
    })
})

module.exports = router