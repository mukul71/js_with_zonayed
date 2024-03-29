function anoGlobal(){
    console.log('Global Function');
    function anoLocal(){
        console.log('Local Function');
    }
    anoLocal();
}
anoGlobal()