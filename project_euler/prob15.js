// Project Euler problem 15:
// Find the number of ways you can traverse a 20 by 20 grid (or n by n)
// if you can only move to the right and down.
// Since you can only go right n times and down n times, the only way
// that you can have a different path is if you choose the down and right
// paths in a different order. This turns into a combinatorial problem of
// finding the number of ways you can rearrange n rights and n downs.

var factorial = function(n) { return n <= 1 ? 1 : n * factorial(n - 1); };

var prob15 = function(n) {
  var nFactorial = factorial(n);
  return factorial(2 * n) / (nFactorial * nFactorial);
};

console.log(prob15(20)); // -> 137846528820
