function welcomemsg(name){
    console.log('Welcome Mr. '+ name);
    return function options(menu){
        console.log('Do you like '+ menu+' Mr. '+name);
    }
}
console.log(welcomemsg('Zonayed Ahmed')('Coffee'));
