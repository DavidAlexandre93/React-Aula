const frutas = [ 'Laranja', 'Banana', 'Uva']

let [ fruta1, , fruta3, fruta4 ] = frutas

console.log(fruta1)
console.log(fruta2)
console.log(fruta3)

const pessoa = {
    nome: 'Joao',
    idade: 20,
    pais: 'Brasil',
    idioma: 'Portugues'
}

let { idade, idioma } = pessoa

console.log(idade)
console.log(idioma)

// Desustruturacao
const localidade = ({pais, idioma}) => `voce mora no ${pessoa.pais} e fala ${pessoa.idioma}`

console.log( localidade(pessoa))