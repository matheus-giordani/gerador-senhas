const rand = (min, max) => Math.floor(Math.random() * (max-min) + min)
const geraMaiuscula = () => String.fromCharCode(rand(65,90))
const geraMinuscula = () => String.fromCharCode(rand(97,122))
const geraNumeros = () => String.fromCharCode(rand(48,57))
const geraSimbolos = () => String.fromCharCode(rand(33,47))

function embaralha(array){
    let indice = array.length
    while(indice){
        const indiceAleatorio = Math.floor(Math.random() * indice--);
        [array[indice], array[indiceAleatorio]] = [array[indiceAleatorio], array[indice]]
    }
    array.join("")
}

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos){

     console.log(qtd)
     console.log(maiusculas)
     console.log(minusculas)
     console.log(numeros)
     console.log(simbolos)
    let senha = [];
    qtd = Number(qtd);
    for(let i= 0; i < qtd ; i++){
        // isso é avaliação de curto circuito
        maiusculas && senha.push(geraMaiuscula())
        minusculas && senha.push(geraMinuscula())
        numeros && senha.push(geraNumeros())
        simbolos && senha.push(geraSimbolos())
    }
    senha = senha.slice(0,qtd)
    embaralha(senha)
    return senha.join("")

}

