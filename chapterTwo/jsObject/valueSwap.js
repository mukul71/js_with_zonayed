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