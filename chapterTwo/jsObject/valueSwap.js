/*
var a = 10, b = 20;
console.log('Before swap: value of a : '+ a +' and value of b: '+b);

function swap(a,b){
    console.log('Before swap: value of a : '+ a +' and value of b: '+b);
    var temp = a;
    a = b;
    b = temp;
    console.log('After swap insdie function : value of a : '+ a +' and value of b: '+b);
}
swap(a,b);
console.log('After swap : value of a : '+ a +' and value of b: '+b);
*/

var obj = {
    a : 5,
    b: 10
};
console.log('Befor swap: value of a: '+obj.a+' and value of b; '+obj.b);

function swap(x){

console.log('Befor swap: value of a: '+x.a+' and value of b; '+x.b);
var temp = x.a;
x.a = x.b;
x.b = temp;
console.log('After swap, inside function: value of a: '+x.a+' and value of b: '+x.b);
}
swap(obj);
console.log('After swap: value of a: '+obj.a+' and value of b; '+obj.b);