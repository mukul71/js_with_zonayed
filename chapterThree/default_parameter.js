//default parameter is used in case if we do not pass any argument to a function when we call it

function defaultParameter6 (name= 'Zonayed Ahmed', age=44){
    console.log(`My name is: ${name} and I am ${age} years old`);
}
defaultParameter6();
defaultParameter6('Saiful',33);

//Default parameter in function
console.log();
function FunctionConst6 (name = 'Zonayed Ahmed', age = 22){
    this.name = name;
    this.age =age;
}
const zonayed = new FunctionConst6()
console.log(zonayed.name);
console.log(zonayed.age);

console.log();
const zonayed2 = new FunctionConst6('Ahmed Zonayed', 25);
console.log(zonayed2.name);
console.log(zonayed2.age);