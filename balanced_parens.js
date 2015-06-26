// Checks to see if a string of text has balanced parens.

function balancedParens(string) {
  var closed = {')': '(', ']': '[', '}': '{'};
  var open = {'(': true, '[': true, '{': true};
  var parens = [];

  for (var i = 0; i < string.length; i++) {
    if (open[string[i]]) {
      parens.push(string[i]);
    } else if (closed[string[i]]) {
      if (parens.pop() !== closed[string[i]]) {
        return false;
      }
    }
  }
  return parens.length === 0;
}
