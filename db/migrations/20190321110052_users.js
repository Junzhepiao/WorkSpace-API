
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table) {
        table.increments();
        table.string('first_name');
        table.string('last_name');
        table.string('email');
        table.string('password');
        table.string('role');
        table.string('img_url')
        table.string('phone');
        table.integer('sick_hours');
        table.integer('vacation_hours');
        table.boolean('active');
        table.timestamps(true,true);
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
};

