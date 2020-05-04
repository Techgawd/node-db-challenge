exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
      tbl.increments('id')
      tbl.string('name').notNull()
      tbl.string('description')
      tbl.boolean('completed').notNull().defaultTo(false)
    })
    .createTable('resources', tbl => {
        tbl.increments('id');
        tbl.string('name').notNull()
        tbl.string('description')
    })
    .createTable('tasks', tbl => {
        tbl.increments('id')
        tbl.string('description').notNull()
        tbl.string('notes')
        tbl.boolean('completed').defaultTo(false).notNull()
        tbl.integer('projectId').notNull()
        .references('id').inTable('projects')
    })

  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTableIfExists("projects")
      .dropTableIfExists("resources")
      .dropTableIfExists("tasks")
  };
