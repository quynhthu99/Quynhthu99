const express = require("express");
const app = express();
//const app.get();
// dai chi ip = localhost/ 127.0.0.1
// so hieu cong = port(3306)
// http80...
const categoryRoute = require('./routers/category')
app.use('/api/v1/category', categoryRoute);

// methods:
//  GET read
//  POST tao moi create
//  PUT update
//   DELETE delete

const hamxuli = (req, res) => {
    //client: req cau hoi
    // server: res cau tra loi
    res.send("Hello my friend")
   
    }



app.get('/', hamxuli)
//app.get('/api/v1/acount')
// acount 



app.listen(7000, err => {// dia chi ip: so cong
    if (err) console.log(err)
    console.log("Running...")
});

    // BASE_URL : codidungso.me/api/v1