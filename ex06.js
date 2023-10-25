let prompt = require('prompt-sync')();

var fahrenheit = Number(prompt('Digite o valor de Fahrenheit para a conversão: '))

var celsius = fahrenheit * -17.222

console.log(`${fahrenheit}°F equivale a ${celsius}°C.`)