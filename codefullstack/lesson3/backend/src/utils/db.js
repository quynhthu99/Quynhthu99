const mysql = require('mysql'); //import thu vien


//declare config
const config= {
        host: 'codedidungso.me',
        port: '3306', //defaul = 3306
        user: 'root',
        password: '123456',
        database: 'shopese'
}

//tao pool
const pool =mysql.createPool(config) //c1
//c2 mysql.createConnection(config) 
module.exports = pool
