var prob23 = function(n) {
  var divisorSum = function(n) {
    var sum = 1;
    for (var i = 2; i * i < n; i++) {
      if (n % i === 0) { sum += i + (n / i); }
    }
    return sum + (n % i === 0 && i === n / i ? i : 0);
  };

  var isAbundant = function(n) { 
    return divisorSum(n) > n;
  };

  var sum = function(array) {
    return array.reduce(function(t, x) { return t + x; }, 0);
  };

  var range = function(n) { 
    return String(Array(n + 1)).split('').map(function(_, i) { return i + 1; });
  };

  var alreadyAdded = {};
  var abundantNumbers = range(n).filter(isAbundant);

  for (var i = 0; i < abundantNumbers.length; i++) {
    for (var j = i; j < abundantNumbers.length; j++) {
      var number = abundantNumbers[i] + abundantNumbers[j];
      if (!alreadyAdded[number]) {
        alreadyAdded[number] = true;
      }
    }
  }

  return sum(range(n).filter(function(number) {
    return !alreadyAdded[number];
  }));
};

console.log(prob23(28123)); // 4179871
