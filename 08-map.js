import cursos from "./modulos/cursos.js"

/* Map (mapear, mapeia - transformar em outra coisa)
Passa por elementos de um array e realiza operações 
em cada um deles através de uma função (callback), gerando um novo array. */

// Exemplo 1
const numeros = [10, 20, 5, 12, 65, 50];
const numerosDobrados = numeros.map( 
    numero => numero * 2
);
console.log(numeros);
console.log(numerosDobrados);

console.log("------------------------------------------------");


console.log(cursos);

// Exemplo 2: gerar um novo array apenas com os nomes dos cursos

const titulos = cursos.map( curso => curso.titulo );

console.log(titulos);