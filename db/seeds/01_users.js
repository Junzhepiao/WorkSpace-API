
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {first_name: "Nmuta", last_name: 'Jones', email:"admin@gmail.com", password:"admin", role:"Principal Software Engineer", img_url:"https://pbs.twimg.com/profile_images/844295201044684800/AIJkXVKw.jpg", phone:1234567890, sick_hours:40, vacation_hours:80, active: true},
        {first_name: "Troy", last_name: 'Amelotte', email:"admin1@gmail.com", password:"admin", role:"Senior Software Engineer", img_url:"https://avatars3.githubusercontent.com/u/20520404?s=460&v=4", phone:9876543210, sick_hours:40, vacation_hours:80, active: true},
        {first_name: "John", last_name: 'Armbruster', email:"admin2@gmail.com", password:"admin", role:"Senior Software Engineer", img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4X33GrYREghJ0L9zSMna8saWmpQ4VrR8jlM6C1-21YPQDC2Fwhw", phone:1029384756, sick_hours:40, vacation_hours:80, active: true},
      ]);
    });
};
