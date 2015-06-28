// Project Euler 2: https://projecteuler.net/problem=2
// The fibonacci sequence starts with 1, 2, 3, 5, 8, 13, 21, 34, ...
// There's a recurring pattern for the occurrence of even and odd numbers.
// It goes odd, even, odd, odd, even, odd, odd, even, ...
// You can prove that every 3rd number is even by induction, so we only need
// to add every 3rd number under the value 4,000,000 (maxValue).
// So instead of doing 3 iterations of updating a and b and adding b to the 
// total, we can just do a single constant computation which updates a and b
// to the fibonacci values that are 3 above their current positions.
// Since b is updated to be (a + b) for the first iteration, its value after
// the second iteration would be (b + (a + b)), then after the third iteration
// it would be ((a + b) + (b + (a + b))), which is just ((2 * a) + (3 * b)).
// Similarly, the value for a is updated to (a + 2 * b). Using this method,
// we have to do 1/3 of the computations of the brute force algorithm.
// Since the fibonacci sequence grows exponentially, the time complexity with
// respect to maxValue is logarithmic. The space complexity is constant.
function prob2(maxValue) {
  var a = 1, b = 2, total = 0;
  while (b < maxValue) {
    total += b;
    // Update b to be the next even number, which is 3 iterations ahead
    var newB = (2 * a) + (3 * b);
    a = a + (2 * b);
    b = newB;
  }
  return total;
}

console.log(prob2(4000000)); // -> 4613732
