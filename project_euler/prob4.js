// Project Euler 4: https://projecteuler.net/problem=4
function isPalindrome(number) {
  var stringified = String(number);
  for (var i = 0; i < Math.floor(stringified.length / 2); i++) {
    if (stringified[i] !== stringified[stringified.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function prob4() {
  var maxPalindrome = -Infinity;
  for (var x = 10; x < 1000; x++) {
    for (var y = 10; y < 1000; y++) {
      var product = x * y;
      if (isPalindrome(product) && product > maxPalindrome) {
        maxPalindrome = product;
      }
    }
  }
  return maxPalindrome;
}

console.log(prob4()); // -> 906609
