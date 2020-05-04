exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
  .then(function () {
    
      // Inserts seed entries
      return knex('resources').insert([
        { name: 'Marie Kondo book', description: 'available on Kindle'},
        { name: 'disinfectact wipes', description: 'Lysol or Clorox'},
      ]);
    });
  };