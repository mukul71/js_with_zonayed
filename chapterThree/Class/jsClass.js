class child6{
    constructor (name,dob){
        this.name =name;
        this.dob = dob;
    }
    currentAge(){
        console.log(`${this.name} is ${2024-this.dob} years old.`);
    }
}
const zawad6 = new child6("Zawad Ahmed", 1988);
console.log(zawad6.currentAge());