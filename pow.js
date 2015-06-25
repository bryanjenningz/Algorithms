// Imperative power function that accepts positive integers.
// Time: O(n), Space: O(1) (where n is proportional to the exp argument)
function pow(base, exp) {
  var total = 1;
  for (var i = 0; i < exp; i++) {
    total *= base;
  }
  return total;
}

// Recursive power function that accepts positive integers.
// This one uses recursion so the space complexity is linear.
// Time: O(n), Space: O(n)
function pow(base, exp) {
  return exp === 0 ? 1 : base * pow(base, exp - 1);
}

// A tail-recursive power function that uses an inner function.
// Assuming that the browser you're using follows ECMAScript 6's specs,
// the tail calls will be optimized, which makes the space complexity O(1).
// Time: O(n), Space: O(1) (assuming browser supports tail call optimization)
function pow(base, exp) {
  function innerPow(base, exp, total) {
    return exp === 0 ? total : innerPow(base, exp - 1, total * base);
  }
  return innerPow(base, exp, 1);
}

// Slightly optimized power function that accepts positive integers.
// Takes advantage of the fact that (n ^ m)  is equal to (n ^ (m / 2)) ^ 2)
// when m is an even integer.
// Time: O(log(n)), Space: O(n)
function pow(base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp % 2 === 0) {
    var halfValue = pow(base, exp / 2);
    return halfValue * halfValue;
  } else {
    return base * pow(base, exp - 1);
  }
}

// If you use memoize to store values that were already computed by saving
// them in a hash-table, the time complexity goes down to O(1) for values 
// that were already computed and remains O(log(n)) in the worst case for 
// values that weren't computed.
function memoize(func) {
  var values = {};
  return function() {
    var args = Array.prototype.slice.call(arguments);
    if (values[JSON.stringify(args)] === undefined) {
      values[JSON.stringify(args)] = func.apply(this, args);
    }
    return values[JSON.stringify(args)];
  };
}
var pow = memoize(pow);
