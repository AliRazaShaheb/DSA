//Q3 - Prime Number
// What is prime number
// my answer +  google - Prime number are those which can be devided by 1 or itself only without remainder.
// it should be positive integer & more than 1;
// 7 can be devide withou remainder = 7x1 = 7 || 1x7 = 7 (it has two factor )
// 6 is not prime Number (it is composit number, it has more than two factors)
// 6 can be devide by 1, 2, 3, 6 = 1x6=6, 2x3 = 6, 3x2=6, 6x1=6, [it has 4 factors]

// option -1
export function isPrimeNum(n) {
  if (n < 2) {
    return 'Number should be positive & more than 1';
  }
  if (n % 2 === 0) {
    return 'Not prime number';
  }
  return 'yes this is prime number';
}

