
exports.up = function(knex) {
  return knex.schema.createTable("projects", table => {
    table.increments("ID").unique();
    table.string("name", 64).notNullable();
    table.string("description", 255);
    table.bool("completed").notNullable().defaultTo(false);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects");
};
