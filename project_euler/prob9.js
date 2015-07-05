// Project Euler 9:
// Finds the pythagorean triplet's product for which a + b + c === 1000.
// There is only one triplet for which a + b + c === 1000.
function isTriangle(a, b, c) {
  return a * a + b * b === c * c;
}

function prob9(sum) {
  for (var a = 1; a <= Math.floor(sum / 3); a++) {
    for (var b = a; a + b <= Math.floor(sum * 2 / 3); b++) {
      var c = sum - (a + b);
      if (isTriangle(a, b, c)) {
        return a * b * c;
      }
    }
  }
}

console.log(prob9(1000)); // -> 31875000
