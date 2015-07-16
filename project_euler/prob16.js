// Project Euler problem 16:
// Find the sum of the digits of 2 ^ 1000.
var bigInt = require('big-integer');

function prob16(base, exp) {
  return String(bigInt(base).pow(exp)).split('').reduce(function(total, n) {
    return total + Number(n);
  }, 0);
}

console.log(prob16(2, 1000)); // -> 1366
