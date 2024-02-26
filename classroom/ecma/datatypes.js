// Boolean
console.log(true);

// String
console.log('ola');
// console.log("ola");
console.log(`ola`);

const number = 10;

console.log(`o número é ${number}`);
console.log(`o número
é ${number}`);

// Number
console.log(15);
console.log(15.15);
console.log(1515 / 100);
console.log(0.1 + 0.2);
console.log(1 + true);
console.log(1 + undefined);

// Array
const names = ['Alice', 'Bob'];

// JSON
const studentAlice = { name: 'Alice', email: 'alice@email.com' };

const students = [
  { name: 'Alice', email: 'alice@email.com' },
  { name: 'Bob', email: 'bob@email.com' },
];

console.log(students[1]);
console.log(students[1].email);

// const name= students[0].name;
// const email= students[0].email;
const { name, email } = students[0];
console.log(email);
