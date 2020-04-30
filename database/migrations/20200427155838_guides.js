
exports.up = function(knex) {
  return knex.schema.createTable('guides', guides => {
    guides.increments();

    guides
        .string('title', 255)
        .notNullable();
    guides
        .string('description', 1000)
        .notNullable();
    guides
        .string('category', 128)
    guides
        .string('image');

    // Foreign Key
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
