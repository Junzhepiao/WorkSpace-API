
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {user_id: 1, title: 'Nmuta - Morning Meeting', date:'2019-04-03', time:'09:00', duration:'60'},
        {user_id: 2, title: 'Troy - Lunch With Client', date:'2019-04-03', time:'12:00', duration:'60'},
        {user_id: 3, title: 'John - Attend capstone', date:'2019-04-04', time:'15:00', duration:'120'},
        {user_id: 3, title: 'John - Team Meeting', date:'2019-04-01', time:'9:00', duration:'60'},
        {user_id: 1, title: 'Nmuta - Lunch with Clent ', date:'2019-04-05', time:'12:00', duration:'60'}

      ]);
    });
};
