// console.log("Helloooo LQT")
  
// const express = require('express');
// //const { request } = require('express');
// const dbUtils = require('./utils/db');
// const pool = require('./utils/db');
// const app = express();
// // const a=10;
// // const a=function(){}
// // singleton

// // const callback = () => {
// //     console.log("Runnung at 8080");
// // }
// // app.listen(8080, callback)
// //localhost:8080/

// // const hamxuly = (request, response) => {
    
// //     const data = {
// //         username: 'thu',
// //         password: 'lailathu'

// //     }
// //     response.send(data);
// // }



// app.get('/', (request, response) => {
//     pool.query('select * from `user`;', (err,data) => {
//         if(err) console.log(err)
//         console.log(data);
//         response.send(data)
//     })

// })
// const callback = () => {
//     console.log("Runnung at 8080");
// }
// app.listen(8080, callback)

const object1 = {
    thuoctinh1: "thuoctinhso1",
    thuoctinh2: "thuoctinhso2",
    thuoctinh3: "thuoctinhso3",
}

const tt1=object1.thuoctinh1
const { thuoctinh1,thuoctinh2 } =object1

console.log(thuoctinh1);

//c1
const getData = async() => {

}

const getData2 =(callback) => {
    //sau khi lay du lieu xong
    callback();
}
//c2
const fun1 = async () => { //async la dowi nhau
 const congviec1 = await getData()
}

const excutor=(resolve,reject) => {
    resolve(10)
}
const prom =  new Promise(excutor);

prom.then(
    data => {
        console.log(data)
    }
).catch(
    err => {
        console.log(err);
    }
)

//dong87