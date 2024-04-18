//Example from ES5
var numbers = [1,2,3,4];
function calculate (a, b, c, d){
    console.log('Sum: '+ (a+b+c+d));
}
calculate(numbers); //Output 1,2,3,4 undefined, undefined, undefined as 
                    //it will cound numbers array as one out of 4 arguments. 

// by using spread operator, we can do it as bellow
console.log();
console.log('spread operator ... used');
calculate(... numbers); // Output Sum:10 

//spread operator in array methods
console.log();
console.log('spread operator in array method');

//ES5
var arrName = ['Rahim','karim','Rafik','Jabbar'];
console.log(arrName);
//Adding one element at beginning and ending

arrName.unshift('Shfik');
arrName.push('Salam');
console.log(arrName);

// ES6 with spread operator
console.log();
const arrName6 = ['Bangladesh', ...arrName]; //for array.unshiift()
console.log(arrName6);
const arrName7 = [...arrName6,'Language'];
console.log(arrName7);

//spread operator to concate arrays in ES6
console.log();

let arrOne6 = [0,1,2,3,4];
let arrTwo6 = [5,6,7,8,9];
let arrThree6 = [...arrOne6, ...arrTwo6];
console.log(arrThree6);



