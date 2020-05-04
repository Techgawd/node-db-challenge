exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
  .then(function () {
    
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Organize Kitchen', description: 'Marie Kondo the whole kitchen', completed: 'False'},
      ]);
    });
  };