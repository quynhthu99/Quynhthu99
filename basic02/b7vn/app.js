const express = require("express")
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")

const fs = require("fs")
let app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.engine("handlebars", handlebars({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

app.get("/", (req, res) => {
    let rawData = fs.readFileSync("data.json","utf8")
    let data = JSON.parse(rawData)
    console.log(data)
    let randomNumber = Math.floor(Math.random()*data.length)
    let question = data[randomNumber]
    res.render("mainPage",{
        questionData: question.questionContent
    })

})
app.get("/ask", (req, res) => {
    res.render("askPag                                                                                     ne")
})
app.post("/ask", (req, res) => {
    let question = req.body.question
    
    let data
    // try {
    //     let rawData = fs.readFileSync("data.json", "utf8")
    //     console.log("Du lieu chua xu ly la: ",typeof(rawData))
    //     let data = JSON.parse(rawData)
    //     console.log("Du lieu da duoc xu ly la: ",typeof(data))
    //     let newQuestion = {
    //         id: data.length,
    //         questionContent: question,
    //         questionAnswer: []
    //     }
    //     data.push(newQuestion)
    //     console.log("Data sau khi duoc push la",data)
    //     let savedData = JSON.stringify(data)
    //     fs.writeFile("data.json",savedData,(err)=>{
    //         if(err){console.log(err)}else{
    //             console.log("Saved")
    //             res.render("askPage")
    //         }
    //     })
    // } catch (error) {
    //     let data = []
    //     let newQuestion = {
    //         id: 0,
    //         questionContent: question,
    //         questionAnswer: []
    //     }
    //     data.push(newQuestion)
    //     let savedData = JSON.stringify(data)
    //     fs.writeFile('data.json', savedData, (err) => {
    //         if (err) { console.log(err) } else {
    //             console.log("Saved")
    //             res.render("askPage")
    //         }
    //     })
    // }
    // res.send("Da nhan cau hoi")
    // console.log(question)
    try {
        let rawData = fs.readFileSync("data.json", "utf8")
        data = JSON.parse(rawData)
        
    } catch (err) {
        data = []
        
    } finally {
        let newQuestion = {
            id: data.length,
            questionContent: question,
            questionAnswer: []
        }
        data.push(newQuestion)
        let savedData = JSON.stringify(data)
        fs.writeFile("data.json", savedData, (err) => {
            if (err) { console.log(err) } else {
                console.log("Saved")
                res.render("askPage")
            }
        })
    }
})

//khoi tao server
app.listen(5000, (err) => {
    if (err) { console.log(err) } else {
        console.log("App listen at 5000")
    }
})