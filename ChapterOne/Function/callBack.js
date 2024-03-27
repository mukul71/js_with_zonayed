function callMyName(name, callback){
    var myAge = 20;
    callback(myAge);
    console.log('Is it interesting ? Yes, it is Mr. '+ name);
}
function hello(age){
    console.log('I am passed thrugh argument and my age is '+age);
}
callMyName('Mukul',hello);