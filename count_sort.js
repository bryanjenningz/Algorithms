// Count sort is a non-comparison sorting algorithm. It has O(n) time
// complexity and O(m) space complexity, where n is the length of the array
// and m is the max integer in the array.

// You can use this algorithm whenever you're sorting positive integers
// where the max integer is small enough that you can create an array where
// each index in that array stores the number of occurrences of each integer
// in the original array.

// Example:
// Original unsorted array: [2, 1, 0, 1, 0, 4]
// Counts array: [2, 2, 1, 0, 1]

function countSort(array) {
  var counts = [];
  for (var i = 0; i < array.length; i++) {
    counts[array[i]] = (counts[array[i]] || 0) + 1;
  }

  var sorted = [];
  for (var value = 0; value < counts.length; value++) {
    if (counts[value] !== undefined) {
      var valueCount = counts[value];
      for (var j = 0; j < valueCount; j++) {
        sorted.push(value);
      }
    }
  }
  return sorted;
}
