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

router.post("/resources", (req,res) => {
  scheme.addResource(req.body)
  .then(resource => {
    res.status(200).json(resource)
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

router.get("/resources", (req,res) => {
  scheme.findResources()
  .then(resources => {
    res.status(200).json(resources)
  })
  .catch(err => {
    res.status(500).json({message: "server error", error:err})
  })
})

router.get("/:id", (req,res) => {
  scheme.findById(req.params.id)
  .then(project => {
    console.log("dwad")
    //project.completed ? project.completed = true : project.completed = false;
    res.status(200).json(project)
  })
  .catch(err => {
    res.status(500).json({message: "server error", error:err})
  })
})

module.exports = router