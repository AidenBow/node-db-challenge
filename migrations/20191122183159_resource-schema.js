
exports.up = function(knex) {
  return knex.schema.createTable("resources", table => {
    
    table.integer("project_id").notNullable()
      .unsigned()
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table.increments("ID").primary(['ID', 'project_id']);
    table.string("name", 64).notNullable().unique();
    table.string("description", 128);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("resources");
};
