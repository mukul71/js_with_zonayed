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

//console.log('value of pi is:'+pi); // pi is not defined

//we can access myName() func outside {} as var is used.
/*{
    var myName = function(){
        var a = 'Zonayed Ahmed';
        console.log(a);
    }
}
myName();// output: Zonayed Ahmed
*/

//we cannot access myName() func outside {} if let or const is used
{
    const myName = function(){
        const a = 'Zonayed Ahmed';
        console.log(a);
    }
}
myName();//output: myName() is not defined.