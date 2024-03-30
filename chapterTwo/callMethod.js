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