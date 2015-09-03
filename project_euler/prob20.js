var pe20 = function(n) {
  var factorial = function(number) {
    var f = function(n, total) { return n <= 1 ? total : f(n - 1, total * n); };
    return f(number, 1);
  };
  var digits = function(n) { return String(n).split('').map(Number); };
  var sum = function(n) { return n.reduce(function(t, x) { return t + x; }, 0); };
  return sum(digits(factorial(n)));
};
