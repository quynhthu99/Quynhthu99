var loiBaiHat = 'Kia con buom vang kia con buom xanh';
var lbh = loiBaiHat.split(' ')
//console.log(lbh)
for (let i = 0; i < lbh.length; i++) {
    setTimeout(function(){
        console.log(lbh[i])
    },i*1000)
    
}