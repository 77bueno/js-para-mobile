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

let guardaValor = (valor1, valor2) => {
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