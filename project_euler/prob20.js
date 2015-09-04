var bigInt = function(strNum) {
  this.number = strNum;
  this.pieces = strNum.split('').map(Number);
};

bigInt.prototype.add = function(other) {
  var reverse = function(array) {
    var swap = function(array, i, j) {
      var oldI = array[i];
      array[i] = array[j];
      array[j] = oldI;
    };
    for (var i = 0; i < Math.floor(array.length / 2); i++) {
      swap(array, i, array.length - 1 - i);
    }
    return array;
  };

  var other = new bigInt(String(other));
  var i = 0, overflow = 0, sumArray = [], sum = 0, 
    endI = Math.min(this.number.length, other.number.length),
    bigger = this.number.length > other.number.length ? this : other;

  while (i < endI) {
    sum = (this.pieces[this.pieces.length - 1 - i] + 
      other.pieces[other.pieces.length - 1 - i] + overflow);
    overflow = Math.floor(sum / 10);
    onesDigit = sum % 10;
    sumArray.push(onesDigit);
    i += 1;
  }

  while (bigger.pieces.length - 1 - i >= 0) {
    sum = bigger.pieces[bigger.pieces.length - 1 - i] + overflow;
    overflow = Math.floor(sum / 10);
    onesDigit = sum % 10;
    sumArray.push(onesDigit);
    i += 1;
  }

  if (overflow) {
    sumArray.push(overflow);
  }

  return new bigInt(reverse(sumArray).join(''));
};

bigInt.prototype.mult = function(other) {
  var total = new bigInt('0'), number = this.number;
  for (var i = 0; i < Number(other); i++) {
    var total = total.add(number);
  }
  return total;
};

var prob20 = function(n) {
  var fact = function(n, total) { 
    total = total || new bigInt('1');
    return n <= 1 ? total.number : fact(n - 1, total.mult(String(n))); 
  };
  var digits = function(n) { return n.split('').map(Number); };
  var sum = function(array) { return array.reduce(function(t, x) { return t + x; }); };
  return sum(digits(fact(String(n))));
};

console.log(prob20(10)); // 648
