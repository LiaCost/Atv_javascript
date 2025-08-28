const numeroSecreto = Math.floor(Math.random() * 20) + 1;
let num;

while (num !== numeroSecreto) {
  num = parseInt(prompt("Adivinhe o número de 1 a 20:"));

  if (num > numeroSecreto) {
    alert("É menor!");
  } else if (num < numeroSecreto) {
    alert("É maior!");
  } else {
    alert("Parabéns! Você acertou!");
  }
}
