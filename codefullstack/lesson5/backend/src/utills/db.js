const mysql = require('mysql')

const config= {
    host: 'localhost',
    port: '3306', //defaul = 3306
    user: 'root',
    password: 'luongquynhthu12345',
    database: 'shopese'
}

const pool = mysql.createConnection(config)

module.exports = pool