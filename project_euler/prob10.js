// Project Euler 10:
// Finds the sum of all primes under maxValue.

function isPrime(number) {
  if (number < 2) { return false; }
  for (var divider = 2; divider * divider <= number; divider++) {
    if (number % divider === 0) { return false; }
  }
  return true;
}

function sum(numbers) {
  return numbers.reduce(function(total, number) { return number + total; }, 0);
}

function prob10(maxValue) {
  var primes = [2, 3];
  for (var i = 5, step = 2; i < maxValue; i += step, step = 6 - step) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return sum(primes);
}

console.log(prob10(2000000)); // -> 142913828922
