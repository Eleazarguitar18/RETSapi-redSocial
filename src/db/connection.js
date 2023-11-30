// db/connection.js
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'bj5530vf4db8uj2yvtmz-mysql.services.clever-cloud.com',
    user: 'uybnct78drtacgm1',
    password: 'WHMqDPUShMWWvIhwoYOT',
    database: 'bj5530vf4db8uj2yvtmz',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;
