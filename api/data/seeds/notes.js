
exports.seed = (knex) => {
  return knex('notes').del()
    .then(() => {
      return knex('notes').insert([
        { 
          title: "Title.",
          body: "Amazon.",
          author: "paragraph",
        },
      ]);
    });
};


