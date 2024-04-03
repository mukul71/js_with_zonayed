//var has function level scope
//let/const has block level scope. e.g if declared inside if, workable only inside if scope.

//var

function es5var(){
    if (true){
        var a = 5;
    }
    console.log('Value:'+a); 
}
es5var();  //Output: value:5 and no error

//let/const

function es6var(){
    const c = 4;
    if (true){
        const a = 6;
        console.log('Inside if block, a = '+a); //It will give proper output here, but not outside of this block
    }
    //console.log('Value:'+a);  //Output- ReferenceError: a is not defined
    console.log('Value of C is '+c);
}
es6var();//Output- ReferenceError: a is not defined