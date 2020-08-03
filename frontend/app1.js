const password = "CodesePreWeb02";
const char = "!@#$%^&*()"
let inthuong = 0;
let number = 0;
let inhoa = 0;
let kitu = 0;
for (let index = 0; index < password.length; index++) {
    if(password.charAt(index)>="a"&&password.charAt(index)<="z"){
    inthuong++;}
    else if(password.charAt(index)>="A"&&password.charAt(index)<="Z"){
    inhoa++;}
    else if(password.charAt(index)>="0"&&password.charAt(index)<="9"){
    number++;}
    for (let index1 = 0; index1 < char.length; index1++) {
       if(password.charAt(index)==char.charAt(index1)){
           kitu ++;
       }
        
    }
}
if(inthuong==0){
    console.log("Chua it nhat 1 ki ty in thuong")
}
if(inhoa<3){
    console.log("Chua it nhat 3 ki ty in hoa")
}
if(number<2){
    console.log("Chua it nhat 2 so")
}
if(kitu!==1){
    console.log("chua duy nhat 1 ky tu dac biet")
}

