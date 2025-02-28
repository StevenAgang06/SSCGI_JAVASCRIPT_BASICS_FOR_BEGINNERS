let a = "red";
let b = "blue";

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);

const person = {
  name: "Mosh",
  age: 12,
};

for (let key in person) console.log(person[key]);
