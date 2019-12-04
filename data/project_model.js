const db = require('./db-config')

function find() {
  return db("projects")
}

function findById(id) {
  return db("projects").where("ID", id)
}

function add(data) {
  return db("projects").insert(data)
}

function addResource(data) {
  return db("project_resources").insert(data)
}

module.exports = {
  find,
  add,
  addResource,
  findById
}