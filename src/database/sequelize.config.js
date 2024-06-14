import Sequelize from "sequelize";
import { MYSQL, POSTGRESQL } from "../config/constans.js";
// export const sequelize = new Sequelize(MYSQL.DB, MYSQL.USER, MYSQL.PASSWORD, {
//     host: MYSQL.HOST,
//     dialect: 'mysql',
// })

export const sequelize = new Sequelize(POSTGRESQL.DB, POSTGRESQL.USER, POSTGRESQL.PASSWORD, {
    host: POSTGRESQL.HOST,
    port: POSTGRESQL.PORT,
    dialect: 'postgres',
    define: {
        schema: 'redsocial' // Configuración global del esquema para todos los modelos
    }
})
// ? Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('database', 'username', 'password', {
//     host: 'localhost',
//     dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
//   });