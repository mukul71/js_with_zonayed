var fruits ={
name: "Water melon",
price: 350,
weight: 3, 
reaction: function(){
    console.log("Good Taste.");
}
}
console.log(fruits);
console.log(fruits.reaction);

for (item in fruits){
    console.log(item);
}
// Adding array inside Object

var objArr = {
    normal : "Normal Item",
    name : ['Rahim','Karim','Rafik','Shafik','Halim'],
    age: [10, 20,30,40]
}

console.log(objArr.name);
console.log(objArr.name[2]);
console.log(objArr.age[3]);
console.log(objArr.name[0] );
console.log(objArr.name[0], objArr.age[0]);

for (var i=0; i<objArr.name.length;i++){
    console.log("Name: "+objArr.name[i]+" Age: "+objArr.age[i]);
}

var arrObj = [
    'Zonayed',{
        name: 'Rafik',
        age: 22,
        locataion: 'Dhaka'
    },
    'Bangladesh'
]
