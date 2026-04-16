
const maxJogadores = 4;
const inputJogadores = "4";
const categoriaAdulta = "false"; 
const historicoPartidas = [];

console.log("1:", inputJogadores == maxJogadores);
console.log("2:", inputJogadores === maxJogadores);
console.log("3:", categoriaAdulta == false);
console.log("4:", historicoPartidas == false);
console.log("5:", typeof null === 'object');

//EX2 

// Exercício 2: Call-by-Sharing e Imutabilidade (Tema: Fila de Ingressos)
// No JavaScript, primitivos são passados por valor e objetos por "call-by-sharing" (uma cópia da referência). Uma confusão comum é achar que reatribuir um objeto dentro de uma função altera o objeto original fora dela.

function processarReserva(lote){
    if(lote.quantidade === 0){
        lote = { id: lote.id + 1, quantidade: 100, status: 'DISPONIVEL' };
        console.log("Dentro da função", lote.id)
    } else {
        lote.quantidade--
    }
}

const loteAtual = {id: 1, quantidade: 0, status: 'ESGOTADO'}

processarReserva(loteAtual)
console.log("Fora da função:", loteAtual);