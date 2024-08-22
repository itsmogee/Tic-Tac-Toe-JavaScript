// Board Object
const gameBoard = (() => {
  console.log("Tic-Tac-Toe Board");
  board = [];
})();

// Player General object factory function
const player = (playerName) => {
  const name = playerName;
  console.log(`Player ${name}`);

  let score = 0;

  const getPlayerName = () => name;
  const getScore = () => score;
  const updateScore = () => score++;

  const play = (x, y) => {
    return { x, y };
  };

  return { getPlayerName, play, updateScore, getScore };
};

const gameFlow = (() => {
  console.log("Game Flow");
})();

gameBoard;
gameFlow;
const player1 = player("1");
const player2 = player("2");
