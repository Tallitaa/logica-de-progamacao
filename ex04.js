let prompt = require('prompt-sync')();

var firstYear = Number(prompt('Digite um valor que representa um ano: '));
var secondYear = Number(prompt('Digite um valor que representa um ano: '));
var thirdYear = Number(prompt('Digite um valor que representa um ano: '));
var forthYear = Number(prompt('Digite um valor que representa um ano: '));
var fifthYear = Number(prompt('Digite um valor que representa um ano: '));

var differenceBetweenTheFirstYear = firstYear - 2012;
var differenceBetweenTheSecondYear = secondYear - 2012;
var differenceBetweenTheThirdYear = thirdYear - 2012;
var differenceBetweenTheForthYear = forthYear - 2012;
var differenceBetweenTheFifthYear = fifthYear - 2012;

console.log(`A diferença de anos entre 2012 e ${firstYear} é: ${Math. abs(differenceBetweenTheFirstYear)} ano(s).`);
console.log(`A diferença de anos entre 2012 e ${secondYear} é: ${Math. abs(differenceBetweenTheSecondYear)} ano(s).`);
console.log(`A diferença de anos entre 2012 e ${thirdYear} é: ${Math. abs(differenceBetweenTheThirdYear)} ano(s).`);
console.log(`A diferença de anos entre 2012 e ${forthYear} é: ${Math. abs(differenceBetweenTheForthYear)} ano(s).`);
console.log(`A diferença de anos entre 2012 e ${fifthYear} é: ${Math. abs(differenceBetweenTheFifthYear)} ano(s).`);