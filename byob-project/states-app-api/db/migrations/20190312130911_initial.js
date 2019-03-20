
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('states', function(table) {
        table.increments('id').primary();
        table.string('name');
        table.string('capital');
        table.biginteger('population');

        table.timestamps(true, true);
    }),

    knex.schema.createTable('counties', function(table) {
        table.increments('id').primary();
        table.string('name');
        table.integer('state_id').unsigned()
        table.foreign('state_id')
            .references('states.id');
        table.biginteger('population');

        table.timestamps(true, true);
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTable('counties'),
      knex.schema.dropTable('states')
  ])
};
