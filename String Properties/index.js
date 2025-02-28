function showProperties(obj) {
  for (let val in obj) {
    if (typeof obj[val] === "string") console.log(`${val} : ${obj[val]}`);
  }
}

const person = {
  name: "Jose",
  age: 21,
  address: "Makati",
};

console.log(showProperties(person));
