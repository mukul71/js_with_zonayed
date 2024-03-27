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
    name : ['Rahim','Karim','Rafik','Shafik'],
    age: [10, 20,30,40]
}

console.log(objArr.name);