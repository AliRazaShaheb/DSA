// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>DATA STRUCTURE & ALGORITHM</h1>`;

// Q1 - Fibonacci Number
// what is Fibonacci number ?
// my answer- Fibonacci number is sequece of numbers which is a sum of two preceding number
// google - a series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding   numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.
// example - [0,1,1,2,3,5,8,13]

function Fibonacci(n = 1) {
  let defaultNum = [0, 1];
  // let sum = 0;
  for (let i = 2; i < n; i++) {
    defaultNum[i] = i - 1 + (i - 2);
    // sum += i; // wrong approach
  }
  const sum = defaultNum.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return [[...defaultNum], [sum]];
  // return sum;
}

// console.log(Fibonacci(10));

// Q2 - Factorial Number
// what is Factorial Number ?
// my answer - a given number n, will be multiplying by its preceding number
// i.e. 4 = 4*3*2*1
// google - The factorial of a number is the function that multiplies the number by every natural number below it. Symbolically, factorial can be represented as "!".

function factorial(n) {
  if (n <= 1) {
    return 'positive integer and greater than one only';
  }
  let numArr = [];
  for (let i = 1; i < n; i++) {
    numArr.push(i);
  }
  const output = numArr.reverse().join('*');
  const sum = numArr.reverse().reduce((acc, curr) => {
    return acc * curr;
  });
  return [output, sum];
}

// console.log(factorial(5));

//Q3 - Prime Number
// What is prime number
// my answer +  google - Prime number are those which can be devided by 1 or itself only without remainder.
// it should be positive integer & more than 1;
// 7 can be devide withou remainder = 7x1 = 7 || 1x7 = 7 (it has two factor )
// 6 is not prime Number (it is composit number, it has more than two factors)
// 6 can be devide by 1, 2, 3, 6 = 1x6=6, 2x3 = 6, 3x2=6, 6x1=6, [it has 4 factors]

function isPrimeNum(n) {
  if (n < 2) {
    return 'Number should be positive & more than 1';
  }
  if (n % 2 === 0) {
    return 'Not prime number';
  }
  return 'yes this is prime number';
}

// console.log(isPrimeNum(1));

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
  if (Math.sqrt(n) === Math.trunc(Math.sqrt(n))) {
    return `given number '${n}' is PowerOf2`;
  } else {
    return `'${n}' not of PowerOf2`;
  }
}
console.log(isPowerOf2(12));
