const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodeproject',
    password: 'channyfanny@123'
});

module.exports = pool.promise();