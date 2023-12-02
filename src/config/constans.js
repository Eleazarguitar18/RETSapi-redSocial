import dotenv from "dotenv";
dotenv.config();

/* export */ const MYSQL = {
    HOST: process.env.MYSQL_ADDON_HOST,
    DB: process.env.MYSQL_ADDON_DB,
    USER: process.env.MYSQL_ADDON_USER,
    PORT: process.env.MYSQL_ADDON_PORT,
    PASSWORD: process.env.MYSQL_ADDON_PASSWORD,
    URI: process.env.MYSQL_ADDON_URI,
}
/* export */ const SERVER = {
    HOST: process.env.SERVER_HOST || "localhost",
    PORT: process.env.PORT || "3000",
}

// console.log(SERVER.PORT);
export {
    SERVER,
    MYSQL,
};

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