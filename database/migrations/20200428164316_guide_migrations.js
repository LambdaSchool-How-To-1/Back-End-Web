exports.up = function(knex) {
    return knex.schema.createTable('guides', guides => {
      guides.increments();
  
      guides
          .string('title')
          .notNullable();
      guides
          .string('description')
          .notNullable();
      guides
          .string('image');
  
        guides
        .string('category');

      guides
          .integer('guides_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('guides');
  };