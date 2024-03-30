var myCustomObj3 = {
    name:'Tinsal Chakma',
    age : 22,
    job: 'Business',
    anotherObj3: {
        name: 'Zimen Chakma',
        value: function(){
            console.log('My name is '+ this.name);
        }
    }
}

myCustomObj3.anotherObj3.value.apply(myCustomObj3);

var karim ={
    name: 'Karim Rahman',
    dob: 1996,
    age: function(currentYear,msg){
        console.log(msg+''+this.name +' is '+ (currentYear - this.dob)+' years old.');
    }
}
var rahim = {
    name:'Rahim Abdu',
    dob:1986
}
karim.age(2024, 'Hello World, ');

var rahim = {
    name : 'Rahim Abdu',
    dob:1988
}
karim.age.apply(rahim,[2024,' Hello Worl!']);