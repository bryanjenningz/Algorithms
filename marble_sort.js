var marbleSort = function(marbles) {
  var swap = function(array, i, j) {
    var oldIValue = array[i];
    array[i] = array[j];
    array[j] = oldIValue;
  };

  var i = 0, redIndex = 0, blueIndex = marbles.length - 1;
  while (i <= blueIndex) {
    var color = marbles[i];
    if (color === 'red') {
      if (i !== redIndex) { swap(marbles, redIndex, i); }
      redIndex += 1;
      i += 1;
    } else if (color === 'white') {
      i += 1;
    } else if (color === 'blue') {
      swap(marbles, i, blueIndex);
      blueIndex -= 1;
    }
  }
  return marbles;
};

console.log(marbleSort(['white', 'white', 'red', 'blue', 'red', 'blue']));
// ["red", "red", "white", "white", "blue", "blue"]
