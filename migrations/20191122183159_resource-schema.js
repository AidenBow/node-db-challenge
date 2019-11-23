
exports.up = function(knex) {
  return knex.schema.createTable("resources", table => {

    table.integer("project_id").notNullable()
      .unsigned()
      .references('ID')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table.increments("resource_number")
    table.integer("ID").primary(['resource_number', 'project_id']);
    table.string("name", 64).notNullable().unique();
    table.string("description", 255);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("resources");
};
