function sum(a, b = 1) {
  return a + b;
}

console.log(sum(1));
console.log(sum(1, 1));
console.log(sum(1, 1, 1));

const minus = function (a, b) {
  return a - b;
};
console.log(minus(1, 1));

const product = (a, b) => {
  return a * b;
};
console.log(product(2, 2));

const divide = (a, b) => a / b;
console.log(divide(2, 2));

const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  if (number % 2 === 0) {
    console.log(number);
  }
}

const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log(evenNumbers);
