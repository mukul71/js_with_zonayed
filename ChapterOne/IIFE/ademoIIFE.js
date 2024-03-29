// IIFE stands for Immediately Invoke Function Expression
// In IIFE a function is immediately after creation
// For this we need to keep the full function inside '()' and use another () to call it.
/*
(function aDemoFunc(){
    console.log("Hello, I stay inside IIFE");
})();
*/
//No need to call this function separately like this: aDemoFunc(); 

var controller = (function (){
    var a = {
        name: 'Zonayed Ahmed',
        uid:1062
    };
    return a;
})();

var interface = (function(){
    return 'Hello '+ controller.name;
})();
console.log(interface);