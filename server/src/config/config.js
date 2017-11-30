const Sequelize = require('sequelize')
const Op = Sequelize.Op
module.exports = {
  port: 8081,
  db: {
    database: process.env.DB_NAME || "hfpngwyp",
    user: process.env.DB_USER || "hfpngwyp",
    password: process.env.DB_PASS || "BzCtOzKiII0R8mD_rJyyLsDLKGLjQ-DQ",
    options: {
      dialect: process.env.DIALECT || "postgres",
      host: process.env.HOST || "baasu.db.elephantsql.com",
      storage: './testdb.pg',
      operatorsAliases: Op
    }
  }
}
