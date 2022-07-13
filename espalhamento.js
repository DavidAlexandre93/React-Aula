const numeros = [ 1, 2, 3, 4 ]

const novosNumeros = numeros

//Spread
const novosNumerosSpread = [ ...numeros, 6 ] 
novosNumeros.push(5)

console.log(numeros)
console.log(novosNumeros)
console.log(novosNumerosSpread)

const rex = {
    nome: 'Rex'
}

//const max = rex
const max = { ...rex, idade: 2, familia: 'Carnivoros' }
max.nome = 'Max'


console.log(rex)
console.log(max)


// Rest

const somar = (...numeros) => {
   return numeros.reduce((a, b) => a + b, 0)
}

console.log(somar(2, 3, 4))