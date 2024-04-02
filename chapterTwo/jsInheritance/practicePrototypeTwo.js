var Employee = function(name, department, designation, joyrs){
    this.name =name;
    this.department = department;
    this.designation =designation;
    this.joyrs = joyrs; //ttlyrs
}

//adding a prototype for using method 
Employee.prototype.yearOfExperience = function(){
    console.log('Mr/Ms. '+this.name+' works in the deaprtment of '+this.department+' as '+this.designation+' for '+(2024-this.joyrs)+' years.');
}

var employee1 = new Employee('Salma Haque','IT','Developer',2005);
console.log(employee1.name, employee1.joyrs);

//calling the method from the prototype
employee1.yearOfExperience();

// we can variable to prototype also

Employee.prototype.address = 'Bangladesh';

console.log(employee1.address);
