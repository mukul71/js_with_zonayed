/*console.log(this);
function helloName(){
    this.name = 'Zonayed Ahmed';
}
helloName();
console.log(name);

//
var mycustomObj = {
    name:'Zonayed Ahmed',
    age: 21,
    job: 'student',
    anotherObj:{
        name:'Ahmed Zonayed',
        msg:function(){
            console.log('My name is: ' + this.name);
            //console.log(this);
        }
    }
}
mycustomObj.anotherObj.msg();
*/

var myCustomobj = {
    name: 'Zonayed Ahmed',
    age: 21,
    job: 'Student',
    anotherObj : {
        name: 'Ahmed Zonayed',
        value: function(){
            console.log(this);
        }
    }
}
myCustomobj.anotherObj.value();