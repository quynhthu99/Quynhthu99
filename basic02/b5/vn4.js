const fs = require("fs")

fs.readFile("data (1).txt", "utf8", (err, data) => {
    if (err) {
        console.log(err)
    } else {
        let objData = JSON.parse(data)
        for (let index = 0; index < objData.length; index++) {
            console.log(objData[index])
            for (let i = 0; i < objData[index].questionAnswer.length; i++) {
                console.log(objData[index].questionAnswer[i])
            }
            let count = 0;
            for (let i = 0; i < objData[index].questionAnswer.length; i++) {
                if (objData[index].questionAnswer[i] == 'no') {
                    count = count + 1;
                }
            }
            if (count > 3) {
                console.log(`ID co so cau tra loi 'No' lon hon 3: ${objData[index].questionContent}`)
            }
        }
        objData[0].questionContent = "namngu"
        objData[2].questionContent = "namngu"
        console.log(objData)
        var DataAgian = JSON.stringify(objData)
        console.log(DataAgian)
        fs.writeFile('data (1).txt',DataAgian, (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log(`Du lieu da duoc ghi`)
            }
        })
    }
})


