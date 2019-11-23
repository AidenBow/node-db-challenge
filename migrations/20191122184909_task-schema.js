
exports.up = function(knex) {
  return knex.schema.createTable("tasks", table => {
    table.increments("ID").unique();
    table.integer("project_id").notNullable()
      .unsigned()
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table.string("description", 255).notNullable();
    table.string("notes", 255);
    table.bool("completed").notNullable().defaultTo(false);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("tasks");
};
