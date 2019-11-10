var loiBaiHat = 'Kia con buom vang kia con buom xanh';
var lbh = loiBaiHat.split(' ')
//console.log(lbh)
for (let i = 0; i < lbh.length; i++) {
    setTimeout(function () {
        console.log(lbh[i])
    }, i * 1000)

}
let str = "kia con buom vang"
let arr = ['kia', 'con', 'buom', 'vang']
str = str.trim();// space tab newline
while (str.includes("  ")) {
    str = str.replace("  ", " ")
}
console.log(":"+str+":")
let arrStr = str.split(" ")
console.log(arrStr)