
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {first_name: "Nmuta", last_name: 'Jones', email:"admin@gmail.com", password:"admin", role:"manager", img_url:"https://www.linkedin.com/in/nmuta/detail/photo/", phone:1234567890, sick_hours:40, vacation_hours:80, active: true},
        {first_name: "Troy", last_name: 'Amelotte', email:"admin1@gmail.com", password:"admin", role:"seniorFD", img_url:"https://www.linkedin.com/in/troy-amelotte/detail/photo/", phone:1234567890, sick_hours:40, vacation_hours:80, active: true},
        {first_name: "John", last_name: 'Armbruster', email:"admin2@gmail.com", password:"admin", role:"seniorFD", img_url:"https://www.linkedin.com/in/johnarmbruster1/detail/photo/", phone:1234567890, sick_hours:40, vacation_hours:80, active: true},
      ]);
    });
};
