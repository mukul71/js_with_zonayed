
var Persondetails = function(name, age, profession){
    this.name = name;
    this.age =age;
    this.profession = profession;
    this.dateOfBirth = function(){
        console.log(this.name+' was born in '+(2024 - this.age));
    }
}

var samir = new Persondetails('Samir Rahman',44,'Freelancer');
//samir.dateOfBirth();
console.log(samir.dateOfBirth());