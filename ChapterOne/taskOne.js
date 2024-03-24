//Find the biggest among three numbers

var a = 10;
var b = 8;
var c = 17;

if (a > b && a>c){
    console.log(`${a} is bigger than ${b} and ${c}`);
} else if (b >a && b>c){
    console.log(`${b} is bigger than ${a} and ${c}`);
}else {
    console.log(`${c} is bigger than ${a} and ${b}`);
}