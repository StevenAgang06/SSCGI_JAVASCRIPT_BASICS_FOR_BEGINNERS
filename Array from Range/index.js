const number = arrayFromRange(1, 10);

console.log(number);

function arrayFromRange(min, max) {
  const output = [];
  for (let iterator = min; iterator <= max; iterator++) {
    output.push(iterator);
  }
  return output;
}
