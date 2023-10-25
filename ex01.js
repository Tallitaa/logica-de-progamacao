let prompt = require('prompt-sync')();

var clientCode = Number(prompt('Digite o código: '));
var clientName = prompt('Digite o seu nome: ');
var dayOfTheCLientBirth = Number(prompt('Digite o dia do seu nascimento: '));
var monthOfTheCLientBirth = Number(prompt('Digite o mês do seu nascimento(em números): '));
var yearOfTheCLientBirth = Number(prompt('Digite o ano do seu nascimento: '));

var yearstotais = 2023 - yearOfTheCLientBirth;
var yearsInDays = yearstotais * 365;
var monthInDays = monthOfTheCLientBirth * 30;
var totalsum = yearsInDays + monthInDays + dayOfTheCLientBirth;

console.log(`Você tem ${totalsum} dias de vida.`);












/*  30 12 2000
  - 17 07 2000
   ------------
    13 05 2000 <- os meses convertidos em dias + os dias = 163 dias

finalizamos o ano 2000 e vamos pro ano 2001:

ano 2001 ate o ano 2022 são anos fechados, entao converte tudo isso em dias:
2022 - 2001 = 21 anos. 21 * 365 = 7665 dias + 163 dias(dias restantes de 2000)= 7828 dias.

finalizamos ate 2022 e vamos para 2023:

Estamos no mês 09, entao: 9 * 30 = 270 dias + 12 dias(estamos no dia 12) + 7828(dias totais passados) =  8110 dias. */

/* outra forma de resolver: 

2023 - 2000 = 23 anos * 365 = 8395 dias
dia do aniversario: 17 07
mes do aniversario: 12 09

*/


