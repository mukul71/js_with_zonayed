//creating constructor function for Person
var Person = function(name, age, job){
    this.name = name;
    this.age = age;
    this. job = job;
}

//creating instance of Person
var masud = new Person('Masud Rana',44,'Detective');
console.log(masud.job);
//
//adding a prtotype to Person

Person.prototype.hobby = function(){
    console.log(this.name+' likes to slove the mystry as a '+this.job);
}

console.log(masud.hobby());
//
// creating constructor inheritance

var Teacher = function(name, age, job, subject){
    Person.call(this, name, age, job);
    this.subject = subject;
}

//Inheritting from teh Person prototype 
Teacher.prototype = Object.create(Person.prototype);

var Kamal = new Teacher('Kamal Hassan',35,'Teacher','Physics');
console.log(Kamal.subject);

console.log(Kamal.hobby());