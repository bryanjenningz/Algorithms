// Project Euler 3: https://projecteuler.net/problem=3
// We can keep dividing out factors from the number until the largest
// prime factor is all that remains. Since the largest prime for the
// number 600851475143 is 6857, the for-loop only has to iterate until
// the divider is 83 (larger than the square-root of the largest prime).
function prob3(number) {
  for (var divider = 2; divider * divider <= number; divider++) {
    while (number % divider === 0) { number /= divider; }
  }
  return number;
}

console.log(prob3(600851475143)); // -> 6857
