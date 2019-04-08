
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('chats').del()
    .then(function () {
      // Inserts seed entries
      return knex('chats').insert([
        {user_id: 1, content: 'Anybody wanna grab some food with me?'},
        {user_id: 2, content: 'Eat some pizza?'},
        {user_id: 3, content: 'Just had my lunch'}
      ]);
    });
};
