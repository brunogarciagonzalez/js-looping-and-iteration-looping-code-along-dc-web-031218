// Code your solutions in this file
function printBadges(array) {
  for (let index = 0; index < array.length; index++) {
    console.log(`Welcome ${array[index]}! You are employee #${index + 1}.`);
  }
  return array;
}

function tailsNeverFails() {
  let counter = 0;
  let initialRandom = Math.random();
  while (initialRandom >= 0.5 ) {
    counter++;
    initialRandom = Math.random();
  }
  return `You got ${counter} tails in a row!`;
}
