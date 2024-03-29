function parrentFunction(){
    var a = 4;
    function childFunction(){
        var b = 6;
        console.log('Sum is = '+(a + b));
    }
    childFunction();
}
parrentFunction();