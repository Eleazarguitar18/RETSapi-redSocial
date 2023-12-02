import Sequelize from "sequelize";
import { MYSQL } from "../config/constans.js";
export const sequelize = new Sequelize(MYSQL.DB, MYSQL.USER, MYSQL.PASSWORD, {
    host: MYSQL.HOST,
    dialect: 'mysql',
})

// ? Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('database', 'username', 'password', {
//     host: 'localhost',
//     dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
//   });