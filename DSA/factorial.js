// Q2 - Factorial Number
// what is Factorial Number ?
// my answer - a given number n, will be multiplying by its preceding number
// i.e. 4 = 4*3*2*1
// google - The factorial of a number is the function that multiplies the number by every natural number below it. Symbolically, factorial can be represented as "!".

export function Factorial(n) {
  if (n <= 1) {
    return 'please input positive integer and greater than one only';
  }
  let numArr = [];
  for (let i = 1; i < n; i++) {
    numArr.push(i);
  }
  const output = numArr.reverse().join('*');
  const sum = numArr.reverse().reduce((acc, curr) => {
    return acc * curr;
  });
  return `[${output}] = ${sum}`;
}
