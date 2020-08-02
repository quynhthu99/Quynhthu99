//Async Await
let delay = async function () {
    for (let i = 0; i < 10000; i++) {
        for (let j = 0; j < 10000; j++) {

            var l;
        }
    }

}

console.log("BEGIN program");
let ASfunc = async () => {
    console.log("BEGIN function");
    await delay();
    await delay();
    await delay();
    console.log("END function");
}
console.log("BEGIN req");
ASfunc();
// ASfunc();
// ASfunc();
// ASfunc();
console.log("END req");
console.log(x)
var x = 7;
//const fs = require('fs')
var fs = require('fs');//file system 
fs.readFile('namngu.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`Du lieu doc duoc: ${data}`)
    }
})
fs.writeFile('namngu.txt','nam van ngu X10000', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`Du lieu da duoc ghi`)
    }
})
