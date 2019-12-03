const express = require('express');
const router = express.Router();

const scheme = require('./project_model');

router.post("/", (req,res) => {
  scheme.add(req.body)
  .then(project => {
    res.status(200).json(project)
  })
  .catch(err => {
    res.status(500).json({message: "server error", error:err})
  })
})

router.get("/", (req,res) => {
  scheme.find()
  .then(projects => {
    projects.forEach(project => {
      return project.completed ? project.completed = true : project.completed = false;
    })
    res.status(200).json(projects)
  })
  .catch(err => {
    res.status(500).json({message: "server error", error:err})
  })
})

module.exports = router