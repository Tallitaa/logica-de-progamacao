let prompt = require('prompt-sync')();

var productNameOne = prompt('Digite o nome do produto: ');
var priceproductOne = Number(prompt('Digite o valor de entrada do produto: '));
var productNameTwo = prompt('Digite o nome do produto: ');
var priceProductTwo = Number(prompt('Digite o valor de entrada desse produto: '));
var productNameThree = prompt('Digite o nome do produto: ');
var priceproductThree = Number(prompt('Digite o valor de entrada do produto: '));

var percenteProduct = Number(prompt('Digite a porcentagem que deseja aplicar em todos os produtos: '));

var finalPriceOfProductOne = (priceproductOne * percenteProduct) / 100 + priceproductOne;
var finalPriceOfProductTwo = (priceProductTwo * percenteProduct) / 100 + priceProductTwo;
var finalPriceOfProductThree = (priceproductThree * percenteProduct) / 100 + priceproductThree;



console.log(`${productNameOne}: R$${finalPriceOfProductOne},00 reais`);
console.log(`${productNameTwo}: R$${finalPriceOfProductTwo},00 reais`);
console.log(`${productNameThree}: R$${finalPriceOfProductThree},00 reais`);


