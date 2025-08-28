// Programa para desenhar triângulo de asteriscos
const numLinhas = parseInt(prompt("Digite o número de linhas:"));

for (let i = 1; i <= numLinhas; i++) {
    let linha = "";
    for (let j = 1; j <= i; j++) {
        linha += "*";
    }
    console.log(linha);
}