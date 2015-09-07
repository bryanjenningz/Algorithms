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

var prob25 = function(fibDigits) {
  var a = new bigInt('1');
  var b = new bigInt('1');
  var index = 1;
  while (a.number.length < fibDigits) {
    var oldB = new bigInt(b.number);
    b = a.add(b.number);
    a = oldB;
    index += 1;
  }
  return index;
};

console.log(prob25(1000)); // 4782
