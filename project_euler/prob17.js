var prob17 = function(n) {
  var range = function(n) {
    var result = [];
    for (var i = 0; i < n; i++) {
      result.push(i);
    }
    return result;
  };

  var times = function(amount, string) {
    return range(amount).reduce(function(t) { return t + string; }, '');
  };

  var trimFront = function(string, ch) {
    ch = ch || '0';
    var i = 0;
    while (i < string.length && string[i] === ch) { i += 1; }
    return string.slice(i);
  };

  var ones = {
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine'
  };

  var tens = {
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen',
    '20': 'twenty',
    '30': 'thirty',
    '40': 'forty',
    '50': 'fifty',
    '60': 'sixty',
    '70': 'seventy',
    '80': 'eighty',
    '90': 'ninety'
  };

  var zeroes = {
    '100': 'hundred',
    '1000': 'thousand',
    '1000000': 'million',
    '1000000000': 'billion',
    '1000000000000': 'trillion'
  };

  var words = [];

  var toWords = function(n) {
    n = trimFront(n);
    if (n.length === 0) { 
      return; 
    } else if (n.length === 1) {
      words.push(ones[n]);
    } else if (n.length === 2) {
      if (tens[n]) {
        words.push(tens[n]);
      } else {
        var tensPlace = n[0];
        words.push(tens[tensPlace + '0']);
        toWords(n.slice(1));
      }
    } else if (n.length === 3) {
      var hundredsPlace = n[0];
      toWords(hundredsPlace);
      words.push('hundred');
      var rest = n.slice(1);
      if (rest !== '00') {
        words.push('and');
        toWords(rest);
      }
    } else {
      toWords(n[0]);
      words.push(zeroes['1' + times(n.slice(1).length, '0')]);
    }
  };

  if (n) {
    toWords(String(n));
  } else {
    for (var i = 1; i <= 1000; i++) {
      console.log(i);
      toWords(String(i));
    }
  }
  return words.join('').length;
};
