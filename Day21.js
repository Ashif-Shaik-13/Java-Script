const First_name = "A.S";
const Last_name = "Shaik";
let age = 4;

const introduction = `Hello my Name is ${First_name} ${Last_name} and I am ${age} years old.`;

function greeting(name = "guest")
{
    console.log(`Hello ${name}! Have a great day.`);
}

console.log(introduction);
greeting("ashif");
greeting();
