function closureDemo(){
    var x =10;
    function anotherFunc(){
        var y = 20;
        console.log('Sum is = '+(x+y));
    }
    anotherFunc()
}
closureDemo();