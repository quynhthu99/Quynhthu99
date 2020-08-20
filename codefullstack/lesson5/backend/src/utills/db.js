// lie ket databas
const mysql = require('mysql');
const { param } = require('../routers/category');

const config = {
    host: 'localhost',
    port: '3306', //defaul = 3306
    user: 'root',
    password: 'luongquynhthu12345',
    database: 'shopese'
}

const pool = mysql.createPool(config);

const query = (sql, params) => {
    return new Promise((resolve, reject) => {

        pool.query(query, params, (err, result) => {
            //
            if (err) reject(err)
            else resolve(result)
        })
    })
}

const queryOne = (sql, params) => {
    return new Promise((resolve, reject) => {
        pool.query(sql.params, (err, result) => {


            if (err) reject(err)
            else resolve(result)
        })
    })

}
const queryMulti = (sql, params) => {
    return new Promise((resolve, reject) => {
        pool.query(sql.params, (err, result) => {


            if (err) reject(err)
            else resolve(result)
        })
    })

}
module.exports = {
    pool,
    query,
    queryOne,
    queryMulti
}