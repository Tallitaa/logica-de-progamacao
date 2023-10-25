let prompt = require('prompt-sync')();

var sellerCode = Number(prompt('Digite o código do vendedor: '));
var sellerName = prompt('Digite o nome do vendedor: ');
var computerPrice = Number(prompt('Digite o preço do computador: '));
var quantityOfComputerSold = Number(prompt('Digite a quantidade vendida de computador: '));

var sellersCommission = computerPrice / 100;
var totalCommissionFromTheSeller = sellersCommission * quantityOfComputerSold;

console.log(`A comissão total do(a) vendedor(a) ${sellerName} do código ${sellerCode} é de R$${totalCommissionFromTheSeller},00 reais.`);

