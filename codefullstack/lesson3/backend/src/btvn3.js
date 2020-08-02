console.log("Hello...LQT")

const express = require('express');
const dbUtils = require('./utils/db');
 const app = express();

 app.get('/', (request, response) => {
        pool.query('select * from `user`;', (err,data) => {
            if(err) console.log(err)
            console.log(data);
            response.send(data)
        })
 })
 app.get('/', (request, response) => {
    pool.query('select * from `product`;', (err,data) => {
        if(err) console.log(err)
        console.log(data);
        response.send(data)
    })
})
app.get('/', (request, response) => {
    pool.query('select * from `category`;', (err,data) => {
        if(err) console.log(err)
        console.log(data);
        response.send(data)
    })
})
app.get('/', (request, response) => {
    pool.query('select * from `order`;', (err,data) => {
        if(err) console.log(err)
        console.log(data);
        response.send(data)
    })
})
app.get('/', (request, response) => {
    pool.query('select * from `orderDetail`;', (err,data) => {
        if(err) console.log(err)
        console.log(data);
        response.send(data)
    })
})

 const callback = () => {
     console.log("running at 8080")
 }
 app.listen(8080, callback)