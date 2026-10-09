let numbers = [1,2,3,4,5];

let doubled = numbers.map(numbers => numbers*2);
console.log(doubled);

let even = numbers.filter(numbers => numbers%2 == 0);
console.log(even);

let sum = numbers.reduce((add,curr)=> add+curr,0);
console.log(sum);

let num = [1,5,7,9,13,14];
let than_ten = num.find(num => num>10);
console.log(than_ten);

let has3 = numbers.includes(3);
let has7 = numbers.includes(7);

console.log(has3);
console.log(has7);
