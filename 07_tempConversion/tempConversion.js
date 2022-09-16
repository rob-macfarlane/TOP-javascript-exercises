const ftoc = function(tempFarenheit) {
  return Math.round((tempFarenheit - 32) * 5/9 * 10) / 10;

};

const ctof = function(tempCelsius) {
  return Math.round(((tempCelsius * 9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
