// `` backtic sign is used to reduce code complexity (started from ES6) 

const name = 'Zonayed Ahmed';
      age = 22;
      work = 'Student';

      console.log(` My name is ${name} and I am ${age} years old. I am a ${work}`);


     //function in template literal
      function calculateAge (dob){
        return `I am ${2024 - dob} years old`;
      }
      console.log(calculateAge(1980));

      //text format will be the same in output as writen in code:
      console.log(`Hello,
      hour are you today? 
      I am fine, thank you`);