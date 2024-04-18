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
console.log(name);
console.log(age);
console.log(profession);
