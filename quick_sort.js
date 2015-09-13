// The procedural version of quickSort.
function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  var pivot = array[0];
  var below = [];
  var middle = [];
  var above = [];

  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    if (element < pivot) {
      below.push(element);
    } else if (element > pivot) {
      above.push(element);
    } else {
      middle.push(element);
    }
  }

  return quickSort(below).concat(middle).concat(quickSort(above));
}

// This version of quickSort uses a dispatch hashtable and forEach.
function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  var pivot = array[0];
  var subArrays = {below: [], middle: [], above: []};

  array.forEach(function(element) {
    subArrays[element < pivot ? 'below' :
              element > pivot ? 'above' : 'middle'].push(element);
  });

  return quickSort(subArrays.below).concat(subArrays.middle)
         .concat(quickSort(subArrays.above));
}

// This is the functional version of quickSort that uses the arrow-function
// construct introduced in ECMAScript 6.
function quickSort(array) {
  return array.length <= 1 ? array :
         quickSort(array.filter(value => value < array[0]))
         .concat(array.filter(value => value === array[0]))
         .concat(quickSort(array.filter(value => value > array[0])));
}

// In-place quickSort, O(1) space
var swap = function(array, i, j) {
  array[i] ^= array[j]; // because all the cool kids use xor instead of an extra variable
  array[j] ^= array[i];
  array[i] ^= array[j];
};

var quickSortInPlace = function(array, low, high) {
  low = low || 0;
  high = high || array.length - 1;
  var lowEnd = low
  var highStart = high; 
  var pivot = array[low];
  var middleCount = 1;
  var i = low + 1;

  while (i <= highStart) {
    var value = array[i];
    if (value < pivot) {
      if (i !== lowEnd) { swap(array, i, lowEnd); }
      lowEnd += 1;
      i += 1;
    } else if (value === pivot) {
      middleCount += 1;
      i += 1;
    } else if (value > pivot) {
      if (i !== highStart) { swap(array, i, highStart); }
      highStart -= 1;
    }
  }
  if (lowEnd !== low) { quickSortInPlace(array, low, lowEnd); }
  if (highStart !== high) { quickSortInPlace(array, lowEnd + middleCount, high); }
};
