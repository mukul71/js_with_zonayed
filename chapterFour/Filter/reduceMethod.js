var arr = [1,2,3,4,5,6,7,8,9];
var total = arr.reduce(function(sum,item){
    return sum += item;
},0);
console.log(total);