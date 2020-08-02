//khai bao thu vien
const express = require("express")
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")

let app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static("public"))
//cai dat hien thi
app.engine("handlebars", handlebars({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

// cai dat huong dan
app.get("/", (req, res) => {
    res.render("mainPage")
})
app.post("/ask",(req,res)=>{
    let data = req.body.question
    res.send("khong")
    console.log(data)
})
app.get("/ask", (req, res) => {
    res.render("askPage")
})
//khoi tao serve
app.listen(5001, (err) => {
    if (err) { console.log(err) } else {
        console.log("App listen at 5001")
    }
}
)