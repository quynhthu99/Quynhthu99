
var Array = [];
let a = "1537743";
let b = Math.ceil(a.length / 3)
let c = '';
for (index = 0; index < b; index++) {
    Array[index] = a % 1000;
    a = Math.floor(a / 1000);
}
for (index = b - 1; index >= 0; index--) {
    
    c = c+ String(Array[index])
    if(index!=0){
        c = c+','
    }

}
c = c+' vnd'
console.log(c)
