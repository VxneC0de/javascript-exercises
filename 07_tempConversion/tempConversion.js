const convertToCelsius = function(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5 / 9;
  return parseFloat(celsius.toFixed(1)); // Redondeamos a un decimal
};

convertToCelsius();

const convertToFahrenheit = function(celsius) {
  const fahrenheit = (celsius * 9 / 5) + 32;
  return parseFloat(fahrenheit.toFixed(1)); // Redondeamos a un decimal
};

convertToFahrenheit();

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
