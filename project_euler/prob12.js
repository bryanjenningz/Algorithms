// Project Euler 12:
// Finds the first triangle number to have over divisorsCount number of 
// divisors.

function nthTriangleNumber(n) {
  return (n + 1) * n / 2;
}

function factorCount(number) {
  if (number === 1) { return 1; }
  var count = 0;
  for (var divider = 1; divider * divider <= number; divider++) {
    if (number % divider === 0) { count += 2; }
  }
  return count;
}

function prob12(divisorCount) {
  for (var n = 1; true; n++) {
    var nthTriNumber = nthTriangleNumber(n);
    if (factorCount(nthTriNumber) > divisorCount) {
      return nthTriNumber;
    }
  }
}

console.log(prob12(500)); // -> 76576500
