module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/project-database.sqlite3'
    }
  },
  useNullAsDefault: true,

  migrations: {
    directory: "./migrations"
  }

};