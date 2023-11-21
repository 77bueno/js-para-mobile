var idade = 18; // ESCOPO GLOBAL
let mensagem; // ESCOPO GLOBAL
if ( idade >= 18 ) {
    // let mensagem = "É adulto!"; // GLOBAL
} else {
    // let mensagem = "É menor!"; // GLOBAL
}

console.log(idade);
/* Dará erro pois a mensagem
só existe dentro do bloco if/else */
console.log(mensagem);

const meuNome = "Victor";
console.log(meuNome);

// Reatribuição NÃO É possível em constantes
// meuNome = "Victor Bueno";
console.log(meuNome);

// COnstantes sempre são declaradas com algum valor
// E este valor NÃO PODE SER modificado
const escola = "Senac";