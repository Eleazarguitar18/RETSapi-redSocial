// db/connection.js
import { createPool } from 'mysql2/promise';

const pool = createPool({
    host: 'bj5530vf4db8uj2yvtmz-mysql.services.clever-cloud.com',
    user: 'uybnct78drtacgm1',
    password: 'WHMqDPUShMWWvIhwoYOT',
    database: 'bj5530vf4db8uj2yvtmz',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool;
