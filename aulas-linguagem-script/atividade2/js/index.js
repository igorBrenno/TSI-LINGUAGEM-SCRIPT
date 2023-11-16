const frutas = [
    'laranja',
    'uva',
    'goiaba',
    'jaca',
    'banana'
]

const precos = [
    2.50,
    8.40,
    6.99,
    1.99,
    4.99
]

// Q3 Adicione a fruta maça com seu preco 9.90
// frutas.push('maca')
// precos.push(9.90)

// console.log(frutas)
// console.log(precos)



// Q4 Aplicar 10% nos precos dos produtos

// let novopreco = []
// let calc = 0
// for (i of precos) {
//     calc = i * 0.10
//     novopreco.push(i - calc)
// }
// for (i of novopreco) {
//     console.log(i.toFixed(2))
// }


//Outra forma de fazer
// let novopreco = []
// for (let i = 0; i < precos.length; i++) {
//     novopreco.push(precos[i] * 0.9)
// }
// console.log(novopreco)

//Q6 Imprima o nome da fruta mais barata

// let menorpreco = precos[0]

// for (i of precos) {
//     if (i < menorpreco) {
//         menorpreco = i
//     }
// }
// console.log(frutas[precos.indexOf(menorpreco)])

// Q8 deixe o array de precos em ordem crescente e repita a questão 2

// let colecao = new Map();
// for (let i = 0; i < frutas.length; i++) {
//     colecao.set(precos[i], frutas[i])
// }

// colecao = Array.from(colecao).sort()
// for ([preco, fruta] of colecao) {
//     console.log(fruta, preco)
// }