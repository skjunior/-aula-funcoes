// this is a js file
// sergio krug
// resposta 1


// a) o resultado no primeiro console sera de 10 e no segundo 50
// pois a variavel na função esta multiplicando por 5.
//b) não apareceria nada pois o console.log ele mostra o resultado da sua operação.

//resposta 2
//a) o resultado dela sera de tera  frase do usuario + cenoura, tudo em minusculo.
// ja a sua utilidade é de preencher de forma automatica e ocupando menos espaço de escrita
//b) i. 

let textoDoUsuario = prompt("Insira um texto");
const outraFuncao = function(texto) {
return texto.toLowerCase().includes("cenoura")
}
const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
 


console.log("Eu sou Sergio, tenho 24 anos, moro em São Leopoldo e trabalho em canoas.");

function informações() {
    const respostas = []
    let respostaNome = prompt("Como você se chama?")
    respostas.push(respostaNome);

    let respondeIdade = prompt("Quantos anos você tem?");
    respostas.push(respondeIdade);

    let respondeCep = prompt("Por favor, informe seu endereço.");
    respostas.push(respondeCep);

    let profissão = prompt("Com o que você trabalha?");
    respostas.push(profissão);

    return respostas
}
 var respostas = informações()
 console.log(respostas);


function somaDosNumeros(salario, bonus) {
    const valorTotal = salario + bonus
    return valorTotal
}

const calcularSaldo = somaDosNumeros(1000, 500);
console.log(somaDosNumeros(1000, 500));

let saldoCartão = 2000
let saldoBanco = 2500
console.log(saldoBanco >= saldoCartão);

let menssagemAltobots = prompt("Otimos prime chama quem no filme?");
console.log(menssagemAltobots.length);
console.log(menssagemAltobots.toUpperCase());


function operações(umVAlor, outroValor) {
    const respostas = []
    
    const umValor = prompt("Digite um numero");
    const outroValor = prompt("Agora outro numero");

    soma = umVAlor + outroValor
    respostas.push(soma);

    divisão = umValor / outroValor
    respostas.push(divisão);

    subtração = umValor - outroValor
    respostas.push(subtração);

    multiplicação = umValor * outroValor
    respostas.push(multiplicação);

    return respostas
}
let respostas = operações()
console.log(respostas);
