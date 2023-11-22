/* ...spread -> espalhar
Copiar elementos/dados de um array/objeto
para dentro de outro array/objeto. */

const bandas = ["Pink Floyd", "Rush", "Yes"];
const maisBandas = [...bandas, "Slayer", "Nightwish"];

console.log(bandas);
console.log(maisBandas);

console.log("-------------------------------------------");

// Spread com Objetos
const cliente = {
    nome: "Seu Madruga",
    cidade: "São Paulo",
    idade: 55
};

const novosDadosCliente = {
    ...cliente,
    estado: "SP",
    pedido: "123xyz",
    total: 5000.88,
    idade: 60 // Sobreescrevendo valores de propriedades
}

console.log(novosDadosCliente);