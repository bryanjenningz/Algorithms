// Converts base 10 numbers into Roman numerals.
// Works for numbers from 1 to 3999.
function convertToRoman(num) {
  var romanDigits = [
    {one: 'I', five: 'V', ten: 'X'},
    {one: 'X', five: 'L', ten: 'C'},
    {one: 'C', five: 'D', ten: 'M'},
    {one: 'M'}
  ];
  
  return String(num).split('').reverse().map(function(digit, i) {
    return romanizeDigit(Number(digit), romanDigits[i]);
  }).reverse().join('');
}

function romanizeDigit(num, romanDigits) {
  var one = romanDigits.one;
  var five = romanDigits.five;
  var ten = romanDigits.ten;
  
  return (
    num <= 3 ? times(num, one) :
    num === 4 ? (one + five) :
    num === 5 ? five :
    num <= 8 ? five + times(num - 5, one) :
    num === 9 ? one + ten :
    ''
  );
}

function times(amount, ch) {
  function go(amount, result) {
    return amount <= 0 ? result : go(amount - 1, result + ch);
  }
  return go(amount, '');
}
