let num1 = +prompt("informe 1 num")
let num2 = +prompt("informe 1 num")

// o primeiro numero é maior que o segundo?
let maior = num1 > num2
// o primeiro numero é igual ao segundo?
let igual = num1 === num2

// O primeiro numero é divisível pelo segundo?
let div = num1 % num2
let div2 = div === 0
// O segundo numero é divisível pelo primeiro?
let dive = num1 % num2
let dive2 = dive === 0

console.log(`o primeiro numero é maior que o segundo? ${maior}`)
console.log(`o primeiro numero é igual ao segundo? ${igual}`)
console.log(`O primeiro numero é divisível pelo segundo? ${div2}`)
console.log(`O segundo numero é divisível pelo primeiro? ${dive2}`)   