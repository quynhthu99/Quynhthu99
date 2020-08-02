var fs = require('fs');//file system 
fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        var dataAgain = data;
        console.log( `${data}`)
   
    }
})
var reverseOject = function (input) {
    var keys = Object.keys(input);
    var Value = Object.values(input);
    console.log(keys);
    console.log(Value);
}