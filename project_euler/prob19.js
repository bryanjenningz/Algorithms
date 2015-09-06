var prob19 = function() {
  var daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var totalDays = 365;
  var firstSundays = 0;

  for (var year = 1901; year <= 2000; year++) {
    for (var month = 0; month < daysPerMonth.length; month++) {
      // Monday: 0, Tuesday: 1, ..., Sunday: 6
      if (totalDays % 7 === 6) { // Sunday
        firstSundays += 1;
      }
      if (month === 1 && year % 4 === 0 && 
        (year % 100 !== 0 || year % 400 === 0)) { // Leap year
        totalDays += 29;
      } else {
        totalDays += daysPerMonth[month];
      }
    }
  }
  return firstSundays;
};

console.log(prob19()); // 171
