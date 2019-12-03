const db = require('./db-config')

function find() {
  return db("projects")
  
}

function findTasks() {
  return db("tasks")
  .join("tasks", "tasks.id", "=" ,"project_id")
  .select("projects.*")
}

function add(data) {
  return db("projects").insert(data)
}

module.exports = {
  find,
  add
}