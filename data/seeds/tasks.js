exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
  .then(function () {
    
      // Inserts seed entries
      return knex('tasks').insert([
        {projectId: 1, description: 'Pull out everything', notes: 'From all drawers', completed: 'False'},
        {projectId: 1, description: 'Throw away or give away items', notes: 'Anything not used in the last 60 days', completed: 'False'},
      ]);
    });
  };