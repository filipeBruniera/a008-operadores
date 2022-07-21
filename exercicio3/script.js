// a) 5 é maior que 20 e também é menor que 2;
var maior = (5 > 20 && 5 > 2)

// b) 5 é igual a 5 ou é igual a “5”;
var igualOu = (5 === 5 || 5 === '5')

// c) negação de vinte é maior que cinquenta
var neg = (!20 > 50)
// d) negação de (vinte é maior que cinquenta)
var nega = (!(20 > 50))

console.log(`5 é maior que 20 e também é menor que 2 : ${maior}`)
console.log(`5 é igual a 5 ou é igual a “5”; ${igualOu}`)
console.log(`negação de vinte é maior que cinquenta ${neg}`)
console.log(`negação de (vinte é maior que cinquenta) ${nega}`)
