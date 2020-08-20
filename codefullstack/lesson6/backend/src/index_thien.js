const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = 7000;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json
app.use(bodyParser.json())

// parse multipart/form-data

const categoryRoute = require('./routers/category');

app.use('/api/v1/category', categoryRoute);

const checkHealth = (req, res) => {
  
  res.send(`API running at ${port}`)
}

app.get('/', checkHealth)

// thằng này phải viết ở cuối file 
app.listen(7000, err => {
  if (err) console.log(err);
  console.log('Running');
}) // (địa chỉ ip) : (số cổng)

/*
 
BASE_URL: codedidungso.me/api/v1
RESTful API REpresentational STateful API
/account
Create :  POST    BASE_URL/account
Read 1:   GET     BASE_URL/account/:id
Read N:   GET     BASE_URL/account
Update :  PUT     BASE_URL/account/:id
Delete :  DELETE  BASE_URL/account/:id
/product
/order
/category
*/


// middlewares 

// log

// địa chỉ ip - localhost / 127.0.0.1
// số hiệu cổng - port (max = 65535) 
// HTTP 80 HTTPS 443 MySQL 3306 Mongo 27017 ... 

// methods - CRUD 
// GET - READ 
// POST - CREATE 
// PUT - UPDATE 
// DELETE - DELETE  