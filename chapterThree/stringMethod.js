//startsWith: specify if a string starts with a specific character/characterset
console.log('startsWith Method:');
const start = 'My name is Khan';
console.log(start.startsWith('My'));
console.log(start.startsWith('Khan'));
console.log(start.startsWith('M'));

//endsWith: specify if a strings ends with a specific character/characterset 
console.log('endsWith Method:')
const end = ' I love programming';
console.log(end.endsWith('programming'));

//includes: specify if a string contains a specific character/characterset 

console.log('includes Method');
const inc = 'I love programming with JavaScript';
console.log(inc.includes('JavaScript'));

//repeat: to repeat a string upto a specific number of times

console.log('repeat Method');
const rept = 'Hello! World ';
console.log(rept.repeat(5));
