// Adding reverse() to String.prototype because it's annoying having to 
// write .split('').reverse().join('') every time I reverse a string.
String.prototype.reverse = function() {
  return this.split('').reverse().join('');
};

var longestCommonPrefix = function(s1, s2) {
  for (var i = 0; i < Math.min(s1.length, s2.length); i++) {
    if (s1.charAt(i) !== s2.charAt(i)) { break; }
  }
  return s1.slice(0, i);
};

var longestCommonSuffix = function(s1, s2) {
  return longestCommonPrefix(s1.reverse(), s2.reverse()).reverse();
};
