function anoGlobal(){
    console.log('Global Function');
    function anoLocal(){
        console.log('Local Function');
    }
    anoLocal();
}
anoGlobal()

function autoVar(){
    name = 'Zonayed Ahmaed';
}
autoVar();
console.log(name);