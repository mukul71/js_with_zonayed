//creating a map
const zawad = new Map();

//Map contains key & value (like objec)
//we can keep new key & value to map by using set

zawad.set('fullname', 'Zawad Ahmed');

//we can access value by get 

console.log (zawad.get('fullname'));

// we can check if the map has a specific value
console.log (zawad.has('fullname'));