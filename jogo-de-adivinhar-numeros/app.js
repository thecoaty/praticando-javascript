alert("O jogo começou!");
let dificuldade = 100;
let numeroSecreto = parseInt(Math.random()* dificuldade +1);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Digite um valor entre 1 a ${dificuldade}:`);
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que o chute ${chute}`);
        } else {
            alert(`O número secreto é maior que o chute ${chute}`);
        }
        tentativas ++;
    }
}
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Você descobriu o número secreto! ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);