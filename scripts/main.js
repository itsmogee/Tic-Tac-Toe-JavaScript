// Board Object
const gameBoard = (() => {
  console.log("Tic-Tac-Toe Board");
  let board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];

  const clearBoard = () => {
    board = [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ];
  };

  const updateMove = (x, y, playerChar) => {
    if (x >= 0 && x < 3 && y < 3 && y >= 0) {
      board[x][y] = playerChar;
    }
  };

  const showBoard = () => {
    console.log(board[0]);
    console.log(board[1]);
    console.log(board[2]);
  };

  const getMoves = () => {
    let moveList = [];
    for (let i = 0; i < board[0].length; i++) {
      for (let j = 0; j < board[(0, 0)].length; j++) {
        const element = board[i][j];
        if (element === "") {
          moveList.push([i, j]);
        }
      }
    }
    return moveList;
  };

  return { clearBoard, updateMove, showBoard, getMoves };
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

// Score card object

const scoreCard = (() => {
  console.log("Score Card");
  let playerOneScore = 0;
  let playerTwoScore = 0;
})();

const gameFlow = (() => {
  const player1 = player("1");
  const player2 = player("2");
  console.log("Game Flow");

  const startGame = () => {};
})();
