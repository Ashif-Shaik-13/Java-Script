let numbers =[10,20,30,40,50];
let [first,second,third,...others] = numbers;

console.log(first);
console.log(second);
console.log(third);
console.log(others);

let person =
{
    name: "Ashif",
    age: 19,
    place: "Chennai"
};

let {name, age, place} = person;

console.log(name);
console.log(age);
console.log(place);

function sumAll(...sum)
{
    let total = sum.reduce((sum,num) => sum + num,0);
    console.log(total);
}

console.log(sumAll(10,20,30));
console.log(sumAll(1,2,3,4,5));
