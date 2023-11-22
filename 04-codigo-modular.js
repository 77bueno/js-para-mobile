/* Podemos usar "alias/apelidos" com o comando "as"
para evitar conflitos entre módulos do mesmo nome */

import { pessoa, livro, alunos as reprovados} from "./modulos/dados.js";
import alunos from "./modulos/alunos.js";
import { converteMaiusculas, converteMinusculas, formatamoeda } from "./modulos/funcoes.js";

console.log(pessoa);
console.log(pessoa.nome);

for (const prop in pessoa) {
    console.log(pessoa[prop]);
}

console.log("-------------------------------------------");

console.log(livro.titulo);
console.log(livro.volume);

console.log("-------------------------------------------");

console.log(alunos); // Usando o nome original do módulo
console.log("---------");
console.log(reprovados); // Usando o módulo através de apelido
console.log("-------------------------------------------");

console.log( converteMaiusculas(reprovados[0]) );
console.log( converteMinusculas(alunos[0]) );

let preco1 = 1200.88;
let preco2 = 100000.75;
let preco3 = 500.8467;

console.log(formatamoeda(preco1));
console.log(formatamoeda(preco2));
console.log(formatamoeda(preco3));