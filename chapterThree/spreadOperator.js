//Example from ES5
var numbers = [1,2,3,4];
function calculate (a, b, c, d){
    console.log('Sum: '+ (a+b+c+d));
}
calculate(numbers); //Output 1,2,3,4 undefined, undefined, undefined as 
                    //it will cound numbers array as one out of 4 arguments. 

// by using spread operator, we can do it as bellow
console.log();
console.log('spread operator ... used');
calculate(... numbers); // Output Sum:10 
