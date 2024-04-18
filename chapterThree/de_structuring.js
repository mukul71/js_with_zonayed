//with ES5 
console.log('Destructuring in ES5')

const zonayed = ['Zonayed Ahmed',21, 'Student' ];
var name = zonayed[0];
var age = zonayed[1];
var profession = zonayed[2];

console.log(name);
console.log(age);
console.log(profession);

//with ES6
console.log();
console.log('Destructuring in ES6');

const [name6, age6, profession6] = zonayed;
console.log(name6);
console.log(age6);
console.log(profession6);

//Destructuring in Object in ES5
console.log();
console.log('Destructuring in Object in ES5');

const zonayedObj = {
    nameObj: 'Zonayed Ahmed',
    ageObj: 21,
    professionObj: 'Student'
};

console.log(zonayedObj.nameObj);
console.log(zonayedObj.ageObj);
console.log(zonayedObj.professionObj);

//Destructuring Object in ES6 
console.log();
console.log('Destructuring Object in ES6 ');
const {nameObj, ageObj, professionObj} = zonayedObj;
console.log(nameObj);
console.log(ageObj);
console.log(professionObj);

