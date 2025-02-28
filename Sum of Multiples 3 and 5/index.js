function sum(limit) {
  let sum = 0;
  for (let iterator = 1; iterator <= limit; iterator++) {
    sum = iterator % 3 === 0 || iterator % 5 === 0 ? (sum += iterator) : sum;
  }
  return sum;
}
console.log(sum(12));
