// Import stylesheets
import './style.css';
import { Fibonacci } from './DSA/fibonacci';
import { Factorial } from './DSA/factorial';
import { isPrimeNum } from './DSA/primeNumber';
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>DATA STRUCTURE & ALGORITHM</h1>`;

// Q1 - Fibonacci Number
// console.log(Fibonacci(10)); // [0,1,1,3,5,7,9,11,13,15] = 65

// Q2 - Factorial Number
// console.log(Factorial(5)); //[4*3*2*1] = 24

//Q3 - Prime Number
console.log(isPrimeNum(3));

// Q4 - Power of Two
// What is Power of Two
// power of two is the number which is multiplies of its value;
// i.e.(id est - latin work means 'that is') : n = 2n [2PO2 = 2x2], [4PO2 = 4x4]
//google-wikipedia:  A power of two is a number of the form 2n where n is an integer, that is, the result of exponentiation with number two as the base and integer n as the exponent.

function PowerOf(n, p) {
  let parr = [];
  for (let i = 0; i < p; i++) {
    parr[i] = n;
  }
  const multiply = parr.reduce((acc, curr) => acc * curr);
  return [...parr, multiply];
}

// console.log(PowerOf(2, 10));

function isPowerOf2(n) {
  if (n < 2) {
    return 'number should be greater than 2';
  }
  // if (Math.sqrt(n) === Math.trunc(Math.sqrt(n))) {
  if (n % 2 === 0) {
    return `given number '${n}' is PowerOf2`;
  } else {
    return `'${n}' not of PowerOf2`;
  }
}
// console.log(isPowerOf2(5));
