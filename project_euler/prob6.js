// Project Euler 6: https://projecteuler.net/problem=6
// I originally wrote out sum() using a for-loop but since the input
// value is relatively low, using reduce() has the same speed as a 
// for-loop. Both versions take 1 ms.
function sum(numbers) {
  return numbers.reduce(function(total, n) { return total + n; });
}

function range(low, high) {
  var result = [];
  for (var number = low; number <= high; number++) {
    result.push(number);
  }
  return result;
}

function prob6(maxNumber) {
  var numbers = range(1, maxNumber);
  var total = sum(numbers);
  var squares = numbers.map(function(n) { return n * n; });
  return total * total - sum(squares);
}

console.log(prob6(100)); // -> 25164150
