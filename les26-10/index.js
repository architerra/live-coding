function getSenseOfLife() {
  return 42;
}
const res = getSenseOfLife();
console.log(res);
console.log(getSenseOfLife());

function getSquared(num) {
  return num ** 0.5;
}
console.log(getSquared(-4));

function sum(numOne, numTwo) {
  return numOne + numTwo;
}
console.log(sum(2, 5));

function getMessege(age) {
  if (age < 0 || typeof age !== "number") {
    return null;
  }
  console.log(`I am ${age} years old`);
}
getMessege(25);

const mult = (a, b) => a * b;

console.log(mult(3, 8));

const getMagicNumber = () => 17;
console.log(getMagicNumber());
