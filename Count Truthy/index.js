function countTruthy(array) {
  let truthy = 0;
  for (let val of array) {
    if (val) ++truthy;
  }
  return truthy;
}

let sample = [undefined, null, false, 2, 3];

console.log(countTruthy(sample));
