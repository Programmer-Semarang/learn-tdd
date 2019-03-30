var cointypes = [200, 100, 50, 20, 10, 5, 2, 1];
function getChange(price, paid) {
  var difference = paid - price;
  var change = [];

  cointypes.forEach(function (coin) {
    // keep adding the current coin until it's more than the difference
    while (difference >= coin) {
      change.push(coin);
      difference = difference - coin;
    }
  });

  return change;
}