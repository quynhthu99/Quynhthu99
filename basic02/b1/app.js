console.log("Hello world")
let a = 1;
let b = -3;
console.log(a + b, a * b, a - b, a / b)
if (a == 4) {
    console.log("a la 4")
} else {
    console.log("a khong la 4")
}
for (let index = 2; index < 10; index++) {
    console.log(index)
}
//giai phuong trinh ax^2+bx+c=0
let c = 2;

if (a !== 0) {
    let delta = b * b - 4 * a * c
    if (delta > 0) {
        let d = Math.sqrt(delta)
        let x1 = (-b + d) / 2
        console.log("x1=",x1)
        let x2 = (-b - d) / 2
        console.log("x2=",x2)
    }
    if(delta<0){
        console.log("phuong trinh vo nghiem")
    }
    if(delta == 0){
        let x = -b/(2*a)
    }
}
