// Board Object
const gameBoard = (() => {
  console.log("Tic-Tac-Toe Board");
  board = [];
})();

// Player General object factory function
const player = (name) => {
  console.log(`Player ${name}`);
  return { name };
};

const gameFlow = (() => {
  console.log("Game Flow");
})();

gameBoard;
gameFlow;
const player1 = player("1");
const player2 = player("2");
