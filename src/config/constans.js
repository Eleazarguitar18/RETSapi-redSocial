import dotenv from "dotenv";
dotenv.config();
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: resolve(__dirname, '../..', '.env') });
export const MYSQL = {
    HOST: process.env.MYSQL_ADDON_HOST,
    DB: process.env.MYSQL_ADDON_DB,
    USER: process.env.MYSQL_ADDON_USER,
    PORT: process.env.MYSQL_ADDON_PORT,
    PASSWORD: process.env.MYSQL_ADDON_PASSWORD,
    URI: process.env.MYSQL_ADDON_URI,
}

export const POSTGRESQL = {
    HOST: process.env.POSTGRESQL_ADDON_HOST,
    DB: process.env.POSTGRESQL_ADDON_DB,
    USER: process.env.POSTGRESQL_ADDON_USER,
    PORT: process.env.POSTGRESQL_ADDON_PORT,
    PASSWORD: process.env.POSTGRESQL_ADDON_PASSWORD,
    URI: process.env.POSTGRESQL_ADDON_URI,
}
export const SERVER = {
    HOST: process.env.SERVER_HOST || "localhost",
    PORT: process.env.PORT || "3000",
}
export const CRYPTO = {
    SAL_ROUND: process.env.SALT_ROUNDS
}

export const EMAIL = {
    PASSEMAIL: process.env.EMAIL_PASS,
    EMAIL_SERVICES: process.env.EMAIL_SERVICE,
    API_KEY: process.env.EMAIL_API_KEY
}
// /* export */ const MYSQL = {
//     HOST: 'localhost',
//     DB: 'localbdleo',
//     USER: 'root',
//     PORT: 3306,
//     PASSWORD: null,
//     URI: null,
// }

// console.log(SERVER.PORT);
// export {
//     SERVER,
//     MYSQL,
// };

// module.exports = {
//     SERVER: {
//         HOST: process.env.SERVER_HOST || "localhost",
//         PORT: process.env.PORT || "3000",
//     },
//     MSQL: {
//         HOST: process.env.MYSQL_ADDON_HOST,
//         DB: process.env.MYSQL_ADDON_DB,
//         USER: process.env.MYSQL_ADDON_USER,
//         PORT: process.env.MYSQL_ADDON_PORT,
//         PASSWORD: process.env.MYSQL_ADDON_PASSWORD,
//         URI: process.env.MYSQL_ADDON_URI,
//     }
// };