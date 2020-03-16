
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './api/data/lambda-notes.sqlite3',
    },
    migrations: {
      directory: './api/data/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
        directory: './api/data/seeds',
    },
    useNullAsDefault: true,
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './api/data/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
        directory: './api/data/seeds',
    },
    useNullAsDefault: true,
  }

};
