// Project Euler problem 14:
// Find the largest Collatz sequence under 1,000,000.

function prob14(maxNumber) {
  var maxCount = 1, maxStart = 1, answers = {'1': 1};

  for (var start = 1; start < maxNumber; start++) {
    var number = start;
    var chain = [];

    // Traverse the Collatz sequence until we reach a saved answer.
    for (var count = 0; !answers[number]; count++) {
      chain.push(number);
      number = number % 2 === 0 ? (number / 2) : (number * 3 + 1);
    }

    // Add the remaining moves to the count.
    count += answers[number];

    // Save the chain numbers to the answers hashtable.
    for (var i = 0; i < chain.length; i++) {
      var chainNumber = chain[i];
      answers[chainNumber] = answers[number] + (chain.length - i);
    }

    if (count > maxCount) {
      maxStart = start;
      maxCount = count;
    }
  }
  
  return maxStart;
}

console.log(prob14(1000000)); // -> 837799
