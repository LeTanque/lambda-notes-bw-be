
exports.seed = (knex) => {
  return knex('notes').del()
    .then(() => {
      return knex('notes').insert([
        {
          id: 0,
          tags: "summer",
          title: "Title.",
          textBody: "paragraph",
        },
      ]);
    });
};
