const ToCelsius = (fahrenheit) => {
  return Math.round((fahrenheit - 273.15) * 100) / 100;
};

export default ToCelsius;
