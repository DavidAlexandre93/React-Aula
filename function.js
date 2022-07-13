//Arrow function

function ola(){
    return 'Ola!'
}

//console.log(ola()

function olaPessoa(nome) {
    return `Ola ${nome}`
}
//console.log(olaPessoa('Joao'))

const ola2 = () => {
    return 'Ola Novamente!'
}

//console.log(ola2())

const olaPessoa2 = (nome) => {
    return `Ola novamente ${nome}!`
}

//console.log(olaPessoa('Joao'))

const olaPessoa3 = nome => `Ola Novamente ${nome}`

console.log(olaPessoa3('Joao'))