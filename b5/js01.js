var sotien = "12345678"
var reverse = "";
for (let i = sotien.length - 1;i>=0;i--){

    reverse = reverse + sotien[i];
}
console.log(reverse)
var reverseAgain= "";
for (let i = 0; i < reverse.length; i++) {
    if(i%3==0){
        reverseAgain = "," + reverseAgain;
    }
    
}
reverseAgain = reverse + reverseAgain;
console.log(reverseAgain)

    

