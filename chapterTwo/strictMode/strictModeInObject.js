/*
//Existing Object
var obj = {
    name :'Zonayed Ahmed',
    job  : 'Student'
}

console.log('Name:'+obj.name+' Profession:'+obj.job);

//preventExtensions() method prevents to add properties to a already assigned object. 
Object.preventExtensions(obj);

//Assign a new properties 
obj.age = 35;
console.log(obj.age);// Output: undefined as object was not added to existing properties
                     //But, this code will not show any error. 

*/
//If we use 'use strict' it will show error message

'use strict'; //

var obj2 = {
    name : 'Mukul Rahman',
    job: 'Freelancer'
}

Object.preventExtensions(obj2);
obj2.age = 44;
console.log(obj2.age);//Output: TypeError: Cannot add property age, object is not extensible.