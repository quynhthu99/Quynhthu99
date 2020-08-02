const express = require("express")
const path = require("path")
let app = express()

app.get("/",(req,res)=>{
    res.send("Hello Naams")
})

app.get("/about",(req,res)=>{
    res.sendFile(path.resolve(__dirname+'/public/index1.html'))
})
app.get("/about/thuxinhgai",(req,res)=>{
    res.send("Thu thong minh nhat")
})
app.use(express.static("public"))
app.listen(5000, (err)=>{
    if(err){
        console.log(err)}else{
            console.log("App listen at 5000")
        }
    }
)