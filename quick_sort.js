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
