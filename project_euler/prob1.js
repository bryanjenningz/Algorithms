// Project Euler 1: https://projecteuler.net/problem=1
// This solution has O(1) time and space complexity solution with respect 
// to maxValue. It takes advantage of the fact that the sum of a series
// like 3, 6, ..., 999, is equal to the constant time operation 
// (3 + 999) * (333 / 2). We know this is true because if we add the ends
// 3 and 999 from the series 3, 6, ..., 996, 999, we get 1002, which
// is the same as the value you get from adding 6 and 996 (the next 2 values)
// and every subsequent pair.
// So we can take 1002, which is the sum of each pair and multiply that
// by the number of pairs in the series, which is ((999 / 3) / 2) because
// there are 333 numbers in the series and half that many pairs. The same
// logic can be applied to finding the sums of the 5, 10, ..., 995 series
// and the 15, 30, ..., 990 series.
function prob1(maxValue) {
  // This function return the first upper number in the most outside pair,
  // (for example 999 is the upper number in the pair (3, 999) for the series
  // 3, 6, ..., 999) which we can later use to calculate the sum of each pair.
  function maxDivisible(maxValue, divisor) {
    while (maxValue % divisor !== 0) { maxValue--; }
    return maxValue;
  }

  return (maxDivisible(maxValue, 3) + 3) * (Math.floor(maxValue / 3) / 2)
    + (maxDivisible(maxValue, 5) + 5) * (Math.floor(maxValue / 5) / 2)
    - (maxDivisible(maxValue, 15) + 15) * (Math.floor(maxValue / 15) / 2);
}

console.log(prob1(999)); // -> 233168
