var arr = [1,2,3,4,5,6,7,8,9];
var total = arr.reduce(function(sum,item){
    return sum += item;
},0); //0 is the initial value, it can be any value to start with
console.log(total);

console.log();
console.log('Reduce used in ES6');

const t = arr.reduce((sum,item)=> sum += item, 2);
console.log(t);
