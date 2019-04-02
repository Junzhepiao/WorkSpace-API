exports.up = function(knex, Promise) {
    return knex.schema.createTable('events', function(table) {
        table.increments();
        table.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .notNullable();
        table.string('title');
        table.string('date');
        table.string('time');
        table.timestamps(true,true);
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('events')
};
