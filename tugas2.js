// buat farenheit to celcius

function fromCelsius(number) {
  return (number * 9) / 5;
}

function getFahrenheit(celsius) {
  return fromCelsius(celsius) + 32;
}

console.log(getFahrenheit(20));

function fromFahrenheit(number) {
  return number - 32;
}

function getCelcius(fahrenheit) {
  return (fromFahrenheit(fahrenheit) * 5) / 9;
}

console.log(getCelcius(50));
