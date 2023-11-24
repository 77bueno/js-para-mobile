import cursos from "./modulos/cursos.js";
/* Filter (filtrar) 
Passa por elementos de um array (usando uma função callback),
e retornar valores de acordo com uma ou mais condições gerando um novo array.*/

// Exemplo 1
const vendas = [1500, 3000, 1000, 500, 750];
const meta = 1000;

// Gerando um array com os valores que bateram a meta
const vendasAcimadaMeta = vendas.filter( (venda) => {
    return venda > meta;
} );

console.log(vendas);
console.log(vendasAcimadaMeta);

// Exemplo 2
const alunos = [
    "Nicolas", "Eliel", "André", "Kaue", 
    "Aline", "Melissa", "Marina", "Victor", 
    "Mônica", "Marcelo", "Jhonas"
];

// Filtrando alunos que começam com "M" e terminam com "O"
// Obs.: faz diferença usar maiúsculas ou minúsculas.
const resultados = alunos.filter( aluno => aluno.startsWith("M") && aluno.endsWith("o") );

console.log(resultados);

console.log("-----------------------------------------");

/* Filtrando cursos */

// Filtrando por cursos da categoria Design
const cursosDesign = cursos.filter( curso => curso.categoria == "Design" );

console.log(cursosDesign);