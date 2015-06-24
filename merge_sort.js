function merge(array1, array2) {
  var index1 = 0;
  var index2 = 0;
  var result = [];

  while (index1 < array1.length && index2 < array2.length) {
    result.push(array1[index1] < array2[index2] ? 
                array1[index1++] : array2[index2++]);
  }
  while (index1 < array1.length) { result.push(array1[index1++]); }
  while (index2 < array2.length) { result.push(array2[index2++]); }

  return result;
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  var rightStart = Math.floor(array.length / 2);
  var left = mergeSort(array.slice(0, rightStart));
  var right = mergeSort(array.slice(rightStart));

  return merge(left, right);
}
