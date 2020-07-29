console.log('Hellooo LQT');
// timkiem
//sapxep
//loc
//sum
//paging

//filter
var arr = [
    { id: 1, name: 'TSUN' },
    { id: 2, name: 'HADES' },
    { id: 3, name: 'DIRTY_COINS',
      id: 4, name: 'TSUN' }
];

console.log(arr.filter((a) => a.name === 'TSUN'))

//sort
var arrNumber = [40, 100, 1, 5, 25, 10];
arrNumber.sort(function (a, b) { return a - b });
console.log(arrNumber);

//find
console.log(arr.find((a) => a.name === 'TSUN'))

//sum
var sum = arrNumber.reduce(function (a, b) {
    return a + b
})

console.log(sum);

//paging
function paging(array, so_phan_tu_1_trang){
    var results = [];
 
    while (array.length) {
        results.push(array.splice(0, so_phan_tu_1_trang)); //splice: thêm 1 mục + xóa 1 mục, push thì thêm luôn vào cuối
    }
 
    return results;
}
 
var result = paging([1,2,3,4,5,6,7,8], 3);

console.log(result);