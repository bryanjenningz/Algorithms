// Project Euler problem 15:
// Find the number of ways you can traverse a 20 by 20 grid (or n by n)
// if you can only move to the right and down.
// Since you can only go right n times and down n times, the only way
// that you can have a different path is if you choose the down and right
// paths in a different order. This turns into a combinatorial problem of
// finding the number of ways you can rearrange n rights and n downs.

function fact(n) {
  var total = 1;
  for (var i = 2; i <= n; i++) {
    total *= i;
  }
  return total;
}

function prob15(n) {
  var factN = fact(n);
  return fact(2 * n) / (factN * factN);
}

console.log(prob15(20)); // -> 137846528820
