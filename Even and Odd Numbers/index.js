function showNumbers(limit) {
  for (let iterator = 0; iterator <= limit; iterator++) {
    console.log(iterator % 2 === 0 ? `${iterator} EVEN` : `${iterator} ODD`);
  }
}

console.log(showNumbers(12));
