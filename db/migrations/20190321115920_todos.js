
exports.up = function(knex, Promise) {
    return knex.schema.createTable('todos', function(table) {
        table.increments();
        table.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .notNullable();
        table.string('content');
        table.timestamps(true,true);
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('todos')
};