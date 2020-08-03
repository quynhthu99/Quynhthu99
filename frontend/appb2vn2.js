var tong = function (a, b) {
    console.log(a + b)
}
a = 3
b = 4
tong(a, b)
console.log(tong)
N = 5;
var Array = [];
for (let i = 0; i < N; i++) {
    Array[i] = Math.floor(Math.random() * 99)
    if(i>0){
        Array[i] = Array[i-1]  + (Math.floor(Math.random() * (99-Array[i-1]))+1)
    }

}


console.log(Array)//bai nay em chua lam xong