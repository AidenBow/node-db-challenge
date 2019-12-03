const db = require('./db-config')

function find() {
  return db("tasks")
}

module.exports = {
  find
}