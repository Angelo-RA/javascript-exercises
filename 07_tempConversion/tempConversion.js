const convertToCelsius = function(temperature) {
  const convertedToCelcius = (temperature - 32) * 5/9 ;
  return parseFloat(convertedToCelcius.toFixed(1));;

};

const convertToFahrenheit = function(temperature) {
  const convertedToFahrenheit = (temperature * (9/5)) + 32
  return parseFloat(convertedToFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
