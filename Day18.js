let person =
{
    Name: "ASHIF",
    Age: 19,
    sayHlo: function()
    {
        console.log("My name is "+ this.Name);
    }
}

console.log(person.name);
console.log(person.age);

person.name = "ASH";
person.age = 20;

console.log(person.name);
console.log(person.age);

person.sayHlo();
