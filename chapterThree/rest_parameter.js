//Through  Rest parameter, we can pass any amount of arguments in a function
//example of passing unlimited arguments in ES5

function arguments5 () {
    for (var i = 0; i<arguments.length;i++){
        console.log('Argument passed:'+arguments[i]);
    }
}
arguments5('Bangladesh', 'India', 'Sri Lanka');

//Rest parameter in ES6
console.log();
console.log('Rest Parameter in ES6');
function arguments6(...anyName){
    for (var i = 0; i<anyName.length;i++){
        console.log('Arguments passed: '+anyName[i]);
    }
}
arguments6('Football','Cricket','Hocky','Tennis','Ha du du');