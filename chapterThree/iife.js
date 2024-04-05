(function aDemoFunc(){
    var msg = 'Hello World';
    console.log(msg);
})(); //output: Hello World

//From ES6, we can use let or const to get iife facility 

{
    let a = 5;
    let b = 10;
    const pi = 3.1416;
    console.log(a+b+pi);// output 18.1416
}
// we cannot access above variables from outside of this scope

console.log('value of pi is:'+pi); // pi is not defined