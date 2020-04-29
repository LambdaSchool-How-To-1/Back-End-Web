
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('guides').del()
    .then(function () {
      // Inserts seed entries
      return knex('guides').insert([
        {
          guides_id: 1,
          title: "How to Write a Check!",
          category: "Home",
          description: 'Step 1: Put the current date in the top right. Step 2: Write the name of the individual or company you are paying.  Step 3: Write the dollars amount in the box.  Step 4: Write the dollars amount in words along the line to the left of the amount box.  Step 5: Last step, and most important.  You need to write your signature on the the check.  If you do not, the check will not be valid.',
          image: 'https://cdn.pixabay.com/photo/2016/04/02/14/01/money-1302835_960_720.jpg'
        },
        
      ]);
    });
};
