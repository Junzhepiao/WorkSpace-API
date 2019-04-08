
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {user_id: 1, content: 'Update resume '},
        {user_id: 2, content: 'Make copies!!'},
        {user_id: 3, content: 'Prepare capstone presentation'}
      ]);
    });
};
