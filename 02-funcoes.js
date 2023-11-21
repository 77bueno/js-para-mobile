/* Formas tradicionais */

/* Sintaxe anônima associada à variável/constante
Obs.: cuidado com a ordem, já que nesta sintaxe a função PRIMEIRO
precisa ser declarada para somente DEPOIS ser chamada/executada */
const exemplo1 = function(){
    console.log("Função anônima!");
};

exemplo1();

/* Sintaxe declarada/nomeada 
Obs.: nesta sintaxe, você pode chamar a função
antes ou depois de declará-la. Portanto, a ordem não importa */
function exemplo2(){
    console.log("Função nomeada!");
};

exemplo2();

const guardaValor = (valor1, valor2) => {
    if (valor1 < valor2) {
        let valorAlt = valor1;
        valor1 = valor2;
        valor2 = valorAlt;
    }
    let calculo = valor1 - valor2;
    return calculo;
};

let resultado1 = guardaValor(20, 10);
let resultado2 = guardaValor(20, 40);

console.log(resultado1);
console.log(resultado2);


/* Sintaxe Arrow Function */
const exemplo3 = () => {
    console.log("Arrow Function");
};

exemplo3();

/* const saudacao = (cliente) => {
    console.log(`Olá ${cliente}`);
}; */

/*  Omitir os parênteses do parãmetro (SOMENTE QUANDO FOR 1)
const saudacao = cliente => {
    console.log(`Olá ${cliente}`);
} */

/* Omitir as { } (SOMENTE QUANDO FOR UMA ÚNICA INSTRUÇÃO) */
const saudacao = cliente => console.log(`Olá ${cliente}`);

saudacao("Fulano");
saudacao("Ciclano");

const calculaMetade = (valor) => {
    return valor / 2;
};

let resultadoA = calculaMetade(100);
let resultadoB = calculaMetade(333);

console.log(resultadoA);
console.log(resultadoB);