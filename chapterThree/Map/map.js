//creating a map
const zawad = new Map();

//Map contains key & value (like objec)
//we can keep new key & value to map by using set

zawad.set('fullname', 'Zawad Ahmed');

//we can access value by get 

console.log (zawad.get('fullname'));

// we can check if the map has a specific value
console.log (zawad.has('fullname'));

zawad.set('toberemoved','willberemoved');
console.log(zawad.has('toberemoved')); //true

//we can delete object from map
zawad.delete('toberemoved');

//now check 
console.log(zawad.has('toberemoved'));//false

//we can remove a map by using clear method
//zawad.clear(); // this will remove the map Zawad

// Creating a new map for further exercise

const favorite = new Map();
favorite.set('name','Zonayed Ahmed');
favorite.set('job','Student');
favorite.set('color','Blue');
favorite.set('os','Ubuntu');
favorite.set('mobileos','Android');

console.log(favorite);
console.log(favorite.get('name'));

//we can get teh number of elemetns of a map by size 
console.log(favorite.size);

//we can run loop inside a map

favorite.forEach((value,key)=>console.log(`Key is: ${key} and value is: ${value}`));