//First clas function
//you can use first class function as an argument of another function
//you return one frunction from another function
//you can set first class function as a variable also

function callMyName( name ,callback){
    var myAge = 20;
    callback(myAge);
    console.log(`Is it interesting? Yes it is Mr. `+name);
}
function hello(age){
    console.log('I am passed through argument and my age is :'+ age);
}
console.log(callMyName('Zonayed Ahmed',hello));