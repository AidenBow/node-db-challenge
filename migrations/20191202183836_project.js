
exports.up = function(knex) {
  return (
    knex.schema
      .createTable("projects", table => {
        table.increments("ID")
      })

      .createTable("resources", table => {
        table.increments("ID")
      })
  )
};

exports.down = function(knex) {
  return (
    knex.schema
      .dropTableIfExits("projects")
      .dropTableIfExits("projects")
  )
};
