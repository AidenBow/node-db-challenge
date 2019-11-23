const db = require('./db-config')

function find() {
  return db("projects")
}

function add(data) {
  return db("projects").insert(data)
}

module.exports = {
  find,
  add
}