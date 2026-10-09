
let g = "global variable";

function scope()
{
    let l = "local variable";
    console.log(g);
    console.log(l);
}

scope();
console.log(g);

console.log("\n");

let person = ["writer", "actor"];

person.push("actress");
console.log(person);

person.pop();
console.log(person);

person.shift();
console.log(person);

person.unshift("producer");
console.log(person);

console.log("\n");

let numbers = [10, 20, 30, 40, 50];

for(let i = 0; i < 5; i++)
{
    console.log(numbers[i]);
}
