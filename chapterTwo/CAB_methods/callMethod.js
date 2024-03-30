/*
var myCustomObj = {
    name: 'Zonayed Ahmed',
    age:21,
    job: 'Student',
    anotherObj:{
        name:'Ahmed Zonayed',
        value: function(){
            console.log('My name is ' + this.name);
        }
    }
}
myCustomObj.anotherObj.value(); // Output Ahmed Zonayed
myCustomObj.anotherObj.value.call(myCustomObj); // Output Zonayed Ahmed
*/
var myCustomObj = {
    name: 'Mukul Rahman',
    age:21,
    job: 'Student',
    anotherObj:{
        name:'Rahman Mukul',
        value: function(){
            console.log('My name is ' + this.name);
        }//.call (myCustomObj) //Not working here
    }
}
myCustomObj.anotherObj.value.call(myCustomObj);

var karim = {
    name: 'Karim Rahman',
    dob: 1996,
    age: function(currentYear){
        console.log(this.name+' is '+ (currentYear - this.dob+' years old'));
    }
}
karim.age(2024); // 2024 is the current year.

var rahim = {
    name: 'Abdu Rahim',
    dob:1986
}

karim.age.call(rahim,2024); //2024 is the current year