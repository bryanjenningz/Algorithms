var prob31 = function(remaining) {
  var coins = [1, 2, 5, 10, 20, 50, 100, 200];
  return (function amount(remaining, coin) {
    return (remaining < 0 || coin < 0) ? 0 :
           (remaining === 0) ? 1 :
           amount(remaining - coins[coin], coin) + amount(remaining, coin - 1);
  })(remaining, coins.length - 1);
};

console.log(prob31(200)); // 73682
