const opcoes = ['pedra', 'papel', 'tesoura'];
const usuario = prompt('Escolha: pedra, papel ou tesoura');
const computador = opcoes[Math.floor(Math.random() * 3)];

console.log('Você: ' + usuario);
console.log('Computador: ' + computador);

if (usuario === computador) {
    console.log('Empate!');
} else if ((usuario === 'pedra' && computador === 'tesoura') || 
           (usuario === 'papel' && computador === 'pedra') || 
           (usuario === 'tesoura' && computador === 'papel')) {
    console.log('Você ganhou!');
} else {
    console.log('Computador ganhou!');
}