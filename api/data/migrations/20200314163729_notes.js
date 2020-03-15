
exports.up = function(knex) {
    return knex.schema.createTable("notes", (notes) => {
        notes.increments("id");
        notes.text("tags");
        notes.text("title");
        notes.text("textBody");
        notes.timestamp('created_at').defaultTo(knex.fn.now());
        notes.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('notes');
};
