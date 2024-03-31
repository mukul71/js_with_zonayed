var myCustomObj = {
    name:'Zonayed Ahmed',
    age: 22,
    anotherObj :{
        name: 'Ahmed Zonayed',
        value: function(){
            console.log('My name is '+this.name)
        }
    }
}
myCustomObj.anotherObj.value.bind(myCustomObj);
var anotherFunc=myCustomObj.anotherObj.value.bind(myCustomObj);
anotherFunc();