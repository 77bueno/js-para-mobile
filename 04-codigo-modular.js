import { pessoa, livro} from "./modulos/dados.js";

console.log(pessoa);
console.log(pessoa.nome);

console.log("-------------------------------------------");

for (const prop in pessoa) {
    console.log(pessoa[prop]);
}

console.log("-------------------------------------------");

console.log(livro.titulo);
console.log(livro.volume);