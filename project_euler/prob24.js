var prob24 = function(n) {
  var fact = function(n) { return n <= 1 ? 1 : n * fact(n - 1); };
  var range = function(n) { return String(Array(n + 1)).split('').map(function(_, i) { return i; }); };
  var swap = function(string, i, j) {
    return string.slice(0, i) + string.slice(i + j, i + j + 1) +
      string.slice(i, i + j) + string.slice(i + 1 + j);
  };

  var string = '0123456789';
  var i = string.length - 1;
  var total = 1;
  var facts = range(string.length).map(fact);

  while (total < n) {
    var timesAdded = 0;
    while (facts[i] > n - total && i > 0) { i -= 1; }
    while (facts[i] <= n - total && i > 0) {
      total += facts[i];
      timesAdded += 1;
    }
    if (timesAdded > 0) {
      string = swap(string, string.length - 1 - i, timesAdded);
    }
  }

  return string;
};

console.log(prob24(1000000)); // 2783915460
