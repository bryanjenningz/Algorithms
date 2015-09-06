var prob21 = function(n) {
  var amicableNumberSum = 0;
  var alreadyAddedPairs = {};
  var alreadyComputed = {};

  var divisorSum = function(n) {
    var sum = 1; // Because all integers are divisible by 1
    for (var i = 2; i * i < n; i++) {
      if (n % i === 0) { sum += i + (n / i); }
    }
    if (n % i === 0) { sum += i; } // i * i === n, so only add i once
    return sum;
  };

  for (var i = 1; i < n; i++) {
    if (!alreadyAddedPairs[i]) {
      var result = alreadyComputed[i] || divisorSum(i);
      if (alreadyComputed[result] === i) {
        amicableNumberSum += result + i;
        alreadyAddedPairs[result] = true;
        alreadyAddedPairs[i] = true;
      } else {
        alreadyComputed[i] = result;
      }
    }
  }
  return amicableNumberSum;
};

console.log(prob21(10000)); // 31626
