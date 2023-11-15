// Seleciona o elemento HTML com a classe "currentPlayer" para exibir o jogador da vez
const currentPlayer = document.querySelector(".currentPlayer");      

// Variáveis para controlar o jogo
let selected;
let player = "X";

// Matriz que representa as posições de vitória
let positions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

// Função de inicialização do jogo
function init() {
  selected = [];

  // Atualiza o texto para indicar o jogador da vez
  currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;

  // Adiciona eventos de clique aos botões do jogo
  document.querySelectorAll(".game button").forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", newMove);
  });
}

init();

// Função chamada quando um novo movimento é feito (quando um botão é clicado)
function newMove(e) {
  const index = e.target.getAttribute("data-i");
  e.target.innerHTML = player;
  e.target.removeEventListener("click", newMove);
  selected[index] = player;

  // Aguarda um curto período e, em seguida, verifica o resultado do jogo
  setTimeout(() => {
    check();
  }, [100]);

  // Alterna o jogador da vez
  player = player === "X" ? "O" : "X";
  currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;
}

// Função para verificar se houve vencedor ou empate
function check() {
  // Determina o último jogador a fazer um movimento
  let playerLastMove = player === "X" ? "O" : "X";

  // Filtra os índices dos itens selecionados pelo último jogador
  const items = selected
    .map((item, i) => [item, i])
    .filter((item) => item[0] === playerLastMove)
    .map((item) => item[1]);

  // Verifica se o último jogador ganhou
  for (pos of positions) {
    if (pos.every((item) => items.includes(item))) {
      alert("O JOGADOR '" + playerLastMove + "' GANHOU!");

      // Reinicia o jogo
      init();
      return;
    }
  }

   // Verifica se houve empate
  if (selected.filter((item) => item).length === 9) {
    alert("DEU EMPATE!");
    init();
    return;
  }
}