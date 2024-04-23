class PersonClass{
    constructor(name, age, job){
        this.name = name;
        this.age = age;
        this.job = job;
    }
}

//adding a new property to the below class inheriting 
//other properties from the above class

class TeacherClass extends PersonClass {
    constructor(name, age, job, subject){
        super(name,age,job);
        this.subject = subject;
    }
}
const ourSir = new TeacherClass('Saifullah Akond', 35, 'Professor', 'Social Science');
console.log(ourSir);
