const express = require("express")
const path = require("path")
const handlebars = require("express-handlebars")
let app = express();
let option = {
    defaultLayout: "main"
}
let renders = handlebars(option)
app.engine("handlebars",renders)
app.set("view engine","handlebars")
app.get("/",(req,res)=>{
    res.render("trang1")
})
app.get("/info",(req,res)=>{
    res.render("trang2")
})
app.get("/Namngu",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"public/index1.html"))
})
app.use(express.static("public"))
app.listen(5000, (err) => {
    if (err) {
        console.log(err)

    } else {
        console.log("App listen at 5000")}

    })