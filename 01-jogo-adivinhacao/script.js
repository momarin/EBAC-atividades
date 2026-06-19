// -------------- PUXANDO ELEMENTOS DO DOM
const btnIniciar = document.querySelector(".btn-iniciar");
const btnChutar = document.querySelector(".btn-chutar");
const inputNumero = document.querySelector(".input-numero");
const mensagem = document.querySelector(".mensagem");
const tentativas = document.querySelector(".tentativas");
const instrucoes = document.querySelector(".instrucoes");
const areaJogo = document.querySelector(".area-jogo");

let numeroRandom;
let tentativasRestantes = 10;
// -------------- INICIANDO O JOGO
btnIniciar.addEventListener("click", function () {
  numeroRandom = Math.floor(Math.random() * 100) + 1;
  tentativasRestantes = 10;
  console.log(numeroRandom);

  // escondendo as instrucoes
  instrucoes.style.display = "none";
  areaJogo.style.display = "flex";

  tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;
  mensagem.textContent = "";
  inputNumero.value = "";
  btnChutar.textContent = "Chutar"; /* * */
  inputNumero.disabled = false; /* * */
});

btnChutar.addEventListener("click", function () {
  if (btnChutar.textContent === "Reiniciar") {
    reiniciarJogo();
    return;
  }

  let chute = parseInt(inputNumero.value);

  // validação
  if (chute < 1 || chute > 100 || isNaN(chute)) {
    mensagem.textContent = "Digite um número de 1 a 100";
    inputNumero.value = "";
    return;
  }

  if (chute === numeroRandom) {
    mensagem.textContent = "Você acertou!";
    btnChutar.textContent = "Reiniciar";
    inputNumero.disabled = true;
    btnChutar.disabled = false;
    return;
  } else if (chute > numeroRandom) {
    tentativasRestantes--;
    mensagem.textContent = `O número ${chute} é MAIOR que o número secreto.`;
  } else {
    mensagem.textContent = `O número ${chute} é MENOR que o número secreto.`;
    tentativasRestantes--;
  }

  tentativas.textContent = `Tentativas restantes ${tentativasRestantes}`;

  if (tentativasRestantes === 0) {
    mensagem.textContent = `Você perdeu! O número secreto era ${numeroRandom}`;
    btnChutar.textContent = "Reiniciar";
    btnChutar.disabled = false;
    inputNumero.disabled = true;
    return;
  }

  //limpando input
  inputNumero.value = "";
  inputNumero.focus();
});
// -------------- REINICIANDO O JOGO
function reiniciarJogo() {
  instrucoes.style.display = "flex";
  areaJogo.style.display = "none";
  btnChutar.textContent = "Chutar";
  btnChutar.disabled = false;
  inputNumero.disabled = false;
  mensagem.textContent = "";
  tentativas.textContent = "Tentativas restantes: 10";
  tentativasRestantes = 10;
  inputNumero.value = "";
}
