import cursos from "./modulos/cursos.js";

/* Reduce (reduzir, redução)
Passa por elementos de um array (usando uma função callback com parâmetros, e um parâmetro com valor inicial) e retorna um único valor/resultado. Pode ser útil para operações matemáticas que geram um único resultado. */

// Exemplo 1
const valores = [10, 5, 50, 200, 1000];
const total = valores.reduce( (acumulador, valor) => {
    return acumulador + valor
}, 0 );

console.log(valores);
console.log(total);

// Sem Reduce com for
let acumuladora1 = 0;
for ( let i = 0; i < valores.length; i++ ) {
    // += operador soma e atribui
     acumuladora1 += valores[i];
}

console.log(acumuladora1);

// Sem Reduce com for/of
let acumuladora2 = 0;
for (const valor of valores) {
    acumuladora2 += valor;
}

console.log(acumuladora2);

console.log("---------------------------------");
console.log("Soma dos cursos usando reduce: ");

const somaCursos = cursos.reduce( (acumulador, curso) => {
    return acumulador + curso.preco;
}, 0);

console.log(somaCursos);

console.log("---------------------------------");
console.log("Desafio: ");

const cursosFB = cursos
    .filter( ( curso => curso.categoria == "Front-End" || curso.categoria == "Back-End" ) )
    .reduce( ( acumulador, curso ) =>  acumulador + curso.preco, 0 );

console.log(cursosFB);