// Using strict mode

'use strict'

var name = 'zonayed ahmed';
var age = 10;
//address = 'Cumilla';//this will show error.
var address = 'Cumilla';

console.log('My name is '+ name +' and I am '+ age +' years old.');

function aFunc(){

    //we can use strict mode here(only on a function)
    //'use strict'
    job = 'Student'; // this will show error
    console.log('A function with Strict Mode Enabled');
}
aFunc();
console.log('I am a'+ job +' and I am from '+ address);

/*

//Using Sloppy mode on the same code

var name = 'zonayed ahmed';
var age = 10;

address = 'Cumilla';

console.log('My name is '+ name +' and I am '+ age +' years old.');

function aFunc(){
    job = 'Student'; 
    console.log('A function with Strict Mode Enabled');
}
aFunc();
console.log('I am a'+ job +' and I am from '+ address);

//this code works