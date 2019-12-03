
exports.up = function(knex) {
  return (
    knex.schema
      .createTable("projects", table => {
        table.increments("ID")
        table.string("name", 64).notNullable()
        table.string("description", 255)
        table.bool("completed").notNullable().defaultTo(false)
      })

      .createTable("resources", table => {
        table.increments("ID")
        table.string("name", 64).notNullable().unique();
        table.string("description", 255);
      })

      .createTable("tasks", table => {
        table.increments("ID").primary();
        table.integer("project_id").notNullable()
          .unsigned()
          .references('ID')
          .inTable('projects')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
        table.string("description", 255).notNullable();
        table.string("notes", 255);
        table.bool("completed").notNullable().defaultTo(false);
      })
      .createTable("project_resources", table => {
        table.integer("project_id").notNullable()
          .unsigned()
          .references('ID')
          .inTable('projects')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
        table.integer("resource_id").notNullable()
          .unsigned()
          .references('ID')
          .inTable('resources')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      })
  )
};

exports.down = function(knex) {
  return (
    knex.schema
      .dropTableIfExists("projects")
      .dropTableIfExists("resources")
      .dropTableIfExists("tasks")
      .dropTableIfExists("project_resources")
  )
};
