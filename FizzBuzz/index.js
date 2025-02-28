function fizzBuzz(input) {
  if (isNaN(input) || typeof input === "boolean") return "Not a number";
  if (input % 3 === 0 && input % 5 === 0) {
    return "FizzBuzz";
  } else if (input % 5 === 0) {
    return "Buzz";
  } else if (input % 3 === 0) {
    return "Fizz";
  } else {
    return input;
  }
}

console.log(fizzBuzz());
