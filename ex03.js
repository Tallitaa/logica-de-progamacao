let prompt = require('prompt-sync')();

var dollarPrice = Number(prompt('Qual a cotação do dólar? '));
var valueForConversion = Number(prompt('Digite o valor para conversão: '));

var convertedValue = valueForConversion * dollarPrice;

console.log(`Valor convertido para real: R$${convertedValue},00.`);
