// var a = 10
// console.log(typeof (a))
// a = "nam"
// console.log(typeof (a))
// a = true
// console.log(typeof (a))
// a = {}
// console.log(typeof (a))
// a = a => 1
// console.log(typeof (a))
// a = undefined
// console.log(typeof (a))
// a = null
// console.log(typeof (a))
// var xinchao = function () {
//     console.log("xinchao")
// }
// setTimeout(xinchao, 5000)
// xinchao()
// setTimeout(function () {
//     console.log("Hello")
// }, 200)
// for (var i = 0; i <5;i++){
//     setTimeout(function(){
//         console.log("xinchao",i)
//     },i*1000)
// }


// for (let i = 0; i <5;i++){
//     setTimeout(function(){
//         console.log("xinchao",i)
//     },i*1000)
// }
// var xyz ="thulon"
// console.log(xyz)
var phanso = {
    tuso: 5,
    mauso: 7
}
phanso.tuso //5
phanso.mauso //7
var mang = {
    0: "a",
    1: "b",
    2: "c"
}
mang[0] // "a"
phanso["tuso"] //5

// console.log(x1==x2)
// var s="nam"
// s.length
// "nam".length
// var t1=true // boolean
// var t2 = 1 //number
//
var F = function () {
    var i;
    for (let i = 0; i < 6; i++) {
        console.log(i);

    }
    console.log(i, "day la i sau cung");
}
F()
// self - invoke
// (function(){
//     console.log("no name");
// })();

var obj = {
    a: "b",
    b: "c",
    c: "d"
}
// var reverseOject = function(input){
//     return{
//         b: "a",
//         c: "b",
//         d: "c"
//     }
// }
var obj2 = {
    b: "a",
    c: "b",
    d: "c"
}
console.log(obj)
// console.log(reverseOject())
var reverseOject = function (input) {
    var keys = Object.keys(input);
    var Value = Object.values(input);
    console.log(keys);
    console.log(Value);
    var returnValue = {};
    for (let i = 0; i < keys.length; i++) {
        let v = Value[i];
        let k = keys[i];
        returnValue[v] = k;
        //obj.key1
        //obj["key1"]

    }
}
console.log(reverseOject(obj2))