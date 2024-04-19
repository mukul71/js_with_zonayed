//Through  Rest parameter, we can pass any amount of arguments in a function
//example of passing unlimited arguments in ES5

function arguments5 () {
    for (var i = 0; i<arguments.length;i++){
        console.log('Argument passed:'+arguments[i]);
    }
}
arguments5('Bangladesh', 'India', 'Sri Lanka');