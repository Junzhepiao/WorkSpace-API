exports.up = function(knex, Promise) {
    return knex.schema.createTable('requests', function(table) {
        table.increments();
        table.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .notNullable();
        table.string('title');
        table.string('reason');
        table.integer('hours');
        table.boolean('approve');
        table.timestamps(true,true);
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('requests')
};
