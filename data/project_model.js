const db = require('./db-config')

function find() {
  return db("projects")
}

module.exports = {
  find
}