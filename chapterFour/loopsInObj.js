var obj = {
    Bangladesh : 'Dhaka',
    India : 'Delhi',
    Pakistan : 'Islamabad',
    Nepal : 'Kathmandu',
    Sri_Lanka : 'Colombo',
    Thailand : 'Bangkok',
    Afganistan : 'Kabul'
}

for(name in obj){
    console.log(name);
    //console.log(obj[name]);
}

var capitals = Object.values(obj);
console.log(capitals);