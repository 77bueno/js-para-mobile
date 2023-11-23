/* Conceito
Usando o ... como "rest operator"
podemos mesclar uma lista de parâmetros/argumentos para uma função. */

const cientistas = ["Tesla", "Einstein", "Newton", "Darwin", "Hawking", "César Lattes"];
const artistas = ["Mano Brown", "Ice Blue", "Edi Rock", "KL Jay"];

                    // Rest
const classificar = (...parametros) => {
    return parametros.sort();
};

/* Chamada da função */
console.log( classificar(...cientistas) ); // spread
console.log( classificar(...artistas) ); // spread