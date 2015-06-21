// A recursive square-root function that finds the square-root of a number 
// by initially guessing 1, then readjusting and improving the guess until
// it is within an acceptable range. It works with really big and really small
// positive numbers. Recursion is not necessary, but it makes the solution 
// easier to understand. I could have also used a while-loop to solve this, 
// but it didn't look as elegant. Since sqrtIterate only makes tail-calls,
// the interpreter for ECMAScript 6 will automatically optimize the code so
// that there's O(1) space complexity for each recursive tail-call.

function sqrt(number) {
  function sqrtIterate(guess) {
    return isGoodEnough(guess) ? guess : sqrtIterate(improve(guess));
  }
  function isGoodEnough(guess) {
    return Math.abs(guess - (number / guess)) < number * 0.0000000000000001;
  }
  function improve(guess) {
    return ((number / guess) + guess) / 2;
  }

  return sqrtIterate(1);
}
