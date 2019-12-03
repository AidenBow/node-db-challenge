const db = require('./db-config')

function find() {
  return db("tasks")
  
  .join("projects", "projects.id", "project_id")
  .select("tasks.*", "projects.description as project_description", "projects.name as project_name")
}

function add(data) {
  return db("tasks").insert(data)
}

module.exports = {
  find,
  add
}