var globalScope = 'I am a global variable';

function glblScope(){
    console.log('Inside a Function:' +globalScope);
}
glblScope();
console.log(globalScope);
