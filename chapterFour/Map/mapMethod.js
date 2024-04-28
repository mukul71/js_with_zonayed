//Regular practice of iteration in a an array

var arr = [1,2,3,4,5,6,7,8,9];

var anotherArr = []
for (var i = 0; i<arr.length;i++){
    anotherArr.push(arr[i] * arr[i]);
}
console.log(anotherArr);

// we can get the above result easily by using Map
// to use map, we need to declare the function that we want to use

console.log('Map method used to get the same result');
function getSquare (item){
    return item * item;
}
var newArr = arr.map(getSquare);
console.log(newArr);

console.log();
console.log("Map using ES6");
const newArr6 = arr.map(item => item * item);
console.log(newArr6);