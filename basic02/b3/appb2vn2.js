var tong = function (a, b) {
    return a + b
}
a = 3;
b = 4;
tong(a, b);

console.log(tong)
console.log(tong1(a, b))
function tong1(a, b) {
    return a + b;
};
let tong2 = function (a, b) {
    return a + b;
};
console.log(tong2(a, b))
// ECMA
let tong3 = (a, b) => {
    return a + b;//arrow function

};
let kq = tong3(2, 1);
console.log(kq)
let tong4 = (a, b) => a + b
let tong5 = (a, b) => ({
    tenham: "tong",
    ketqua: a + b
});
let tanglen1 = e => e + 1;
let sinhTong = e => {
    return function (f) {
        return e + f;
    };
};
let sinhTong5 = sinhTong(5);
let sinhTong6 = sinhTong(6);
let ketQua1 = sinhTong5(6);
console.log(ketQua1)
console.log(sinhTong(5)(6))
let timkiem = function (tenMXH) {
    return function (tenNguoiDung) {
        return tenMXH + tenNguoiDung;
    };
};
const linkINS = "https://instagram.com/";
let tkINS = timkiem(linkINS);
let nam = tkINS("nam ngu");
console.log(nam);
// N = 5;
// var Array = [];
// for (let i = 0; i < N; i++) {
//     Array[i] = Math.floor(Math.random() * 99)


// }


// // console.log(Array)//bai nay em chua lam xong
// console.log(Array.sort())
let n = 10;
let answer = [];
while (answer.length < n) {
    let newValue = Number.parseInt(Math.random() * 101);
    if (answer.indexOf(newValue) == -1) {
        answer.push(newValue);
    }
}
answer.sort((a, b) => a > b);
console.log(answer)
let str1 = "day la cai string 1 ''''"
let str2 = 'day la cai string 2 """ '
let str3 = `day la cai string 3 """''`
let x3 = 10;
let strx = "Day la x3: " + x3
let strxx = `Day la x3: ${sinhTong5(8)}`;
console.log(strx);
console.log(strxx);
let x1 = "100";
let x2 = "10";
console.log(x1 + x2);
console.log(x1 - x2);

