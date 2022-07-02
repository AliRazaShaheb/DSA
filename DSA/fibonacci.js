// Q1 - Fibonacci Number
// what is Fibonacci number ?
// my answer- Fibonacci number is sequece of numbers which is a sum of two preceding number
// google - a series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding   numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.
// example - [0,1,1,2,3,5,8,13]

// my approach - 1
export function Fibonacci(n = 1) {
  let defaultNum = [0, 1];
  // let sum = 0;
  for (let i = 2; i < n; i++) {
    defaultNum[i] = i - 1 + (i - 2);
    // sum += i; // wrong approach
  }
  const sum = defaultNum.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  // return [[...defaultNum], [sum]];
  return `[${[...defaultNum]}] = ${sum}`;
  // return sum;
}
