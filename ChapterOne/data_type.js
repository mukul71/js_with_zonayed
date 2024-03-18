//Primitive Data Types
//in primitive data types values are set directly 
//common primitive data types are as below: 
//
//Number 

var aNumber = 10;
var anOtherNumber = 10.10; //float 
console.log(aNumber);
console.log(anOtherNumber);
//
//String 
var text1 = "I want to say something";
var text2 = "This is exactly the same way, but use either one";
var isString = "10.10";

console.log(text1);
console.log(text2);
console.log(isString);
//
//Boolean
//Boolean follows on small letter. e.g true or false. but not this way: TRUE or FALSE (capitalized)

var isTrue = true; //valid
//var isTrue1 = True; //not valid
//var  isTrue2 = TRUE; //not valid
var isFalse = false; //is valid
//var isFalse1 = False;//Not valid
//var isFalse2 = FALSE;// not valid
console.log(isTrue);
//console.log(isTrue1);
//console.log(isTrue2);
console.log(isFalse);
//console.log(isFalse1);
//console.loog(isFalse2);
//
//
//Undefined data type
//when a variable is declared without any data 

var someThing;
console.log(someThing); // output "undefined"
//
//
//null
//when a somthing has not any data and not un-defined also
// null should be null, not like NULL or Null

var someThing2 = null; 
console.log(someThing2); //output "null"
//
//
//Concatenation
//In Js a '+' is used to add multiple data together
var text = "how " + "are you?";
var welcomeMsg = "Hello, "+text;
console.log(welcomeMsg); // Output Hello, how are you
//
//
//typeof is used to see the data type of a value

console.log(typeof(welcomeMsg)); //output 'string' 


var number1 = 10; 
var number2 = 10;
var number3 = number1 + number2;
var text = "Hello";
var textNum = text + number3; 
console.log(typeof(number3)); // output number
console.log(typeof(textNum)); //output String 
//
//
var complex = 10 + 10 +"Hello"+10; 
console.log(complex);//output 10Hello10 
//JS will add first 2 10s then get text and converts all to string. 
console.log(typeof(complex)); //string 
