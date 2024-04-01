var Personwithmethod = function(name, age, profession){
    this.name = name;
    this.age = age;
    this.profession = profession;
    this.dateofBirth = function(){
        console.log(this.name+' is born in '+(2024-this.age));
    }

}

var samir = new Personwithmethod('samir Hossain',22, 'Student');
samir.dateofBirth();

