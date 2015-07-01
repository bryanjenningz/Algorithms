// Project Euler 5: https://projecteuler.net/problem=5
// To get the largest number that's divisible by all numbers up to maxNumber,
// we collect the prime factors of each number, which takes O(log(n)) time for
// each number, so the entire solution takes O(n * log(n)) time with respect
// to maxNumber.
function primeFactors(number) {
  factors = {};
  for (var divider = 2; divider * divider <= number; divider++) {
    while (number % divider === 0) {
      number /= divider;
      factors[divider] = (factors[divider] || 0) + 1;
    }
  }
  factors[number] = (factors[number] || 0) + 1; // Add the largest factor
  return factors;
}

function prob5(maxNumber) {
  var allFactors = {};
  for (var number = 2; number <= maxNumber; number++) {
    var factors = primeFactors(number);
    for (var factor in factors) {
      allFactors[factor] = Math.max(factors[factor], allFactors[factor] || 0);
    }
  }

  var smallestMultiple = 1;
  for (var factor in allFactors) {
    smallestMultiple *= Math.pow(Number(factor), allFactors[factor]);
  }
  return smallestMultiple;
}

console.log(prob5(maxNumber)); // -> 232792560
