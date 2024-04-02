var Person = function(name, age ,profession){
    this.name = name;
    this.age = age;
    this.profession = profession;
}

//adding method inside the prototype
Person.prototype.greet = function(){
    console.log('Hello, I am '+this.name+' I am '+this.age+' years old and I am a '+this.profession);
}

var samir = new Person('Samir Rahman', 44,'Freelancer');
console.log(samir.name);
console.log(samir.age);

//calling the method
samir.greet();