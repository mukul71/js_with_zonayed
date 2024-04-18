var numbers = [0,1,2,3,4,5,6,7,8,9,];
for (const number of numbers){
    if(number === 5) break;
    console.log(`Number printed ${number}`);
}

//Finding index number in ES6 
console.log();
console.log('Finding index number');
var numbers = [19,23,14,56,32,65,10,45];
var indx = numbers.findIndex(number =>number ===65);
console.log(numbers);
console.log(`Index of 64 is ${indx}`);