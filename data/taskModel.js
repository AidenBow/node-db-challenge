const db = require('./db-config')

function find() {
  return db("tasks")
}

function add(data) {
  return db("tasks").insert(data)
}

module.exports = {
  find,
  add
}