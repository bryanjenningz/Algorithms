// Project Euler 7:
// Finds the nth prime number.
function isPrime(number) {
  if (number < 2) { return false; }
  for (var divider = 2; divider * divider <= number; divider++) {
    if (number % divider === 0) { return false; }
  }
  return true;
}

function prob7(n) {
  var primeCount = 0;
  for (var number = 2; primeCount < n; number++) {
    if (isPrime(number)) { primeCount += 1; }
  }
  return number - 1;
}

console.log(prob7(10001)); // -> 104743
