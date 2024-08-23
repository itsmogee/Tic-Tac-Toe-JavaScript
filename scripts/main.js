// Board Object
const gameBoard = (() => {
  console.log("Tic-Tac-Toe Board");
  let board = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
  ];

  const checkWinCondition = () => {
    if (board[0][0] === board[0][1] && board[0][2] === board[0][0]) {
      console.log("Winner");
      return true;
    } else if (board[0][0] === board[1][0] && board[2][0] === board[0][0]) {
      console.log("Winner");
      return true;
    } else if (board[0][0] === board[1][1] && board[2][2] === board[0][0]) {
      console.log("Winner");
      return true;
    } else if (board[0][0] === board[0][1] && board[0][2] === board[0][0]) {
      console.log("Winner");
      return true;
    } else if (board[0][1] === board[1][1] && board[2][1] === board[0][1]) {
      console.log("Winner");
      return true;
    } else if (board[1][0] === board[1][1] && board[1][2] === board[1][0]) {
      console.log("Winner");
      return true;
    }
  };

  const clearBoard = () => {
    board = [
      ["1", "2", "3"],
      ["4", "5", "6"],
      ["7", "8", "9"],
    ];
  };

  const updateMove = (playerMove, playerChar) => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const element = board[i][j];
        if (board[i][j] === playerMove) {
          board[i][j] = playerChar;
          console.log("Done");
          return true;
        }
      }
    }
    return false;
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
        switch (element) {
          case "1":
            moveList.push(1);
            break;
          case "2":
            moveList.push(2);
            break;
          case "3":
            moveList.push(3);
            break;
          case "4":
            moveList.push(4);
            break;
          case "5":
            moveList.push(5);
            break;
          case "6":
            moveList.push(6);
            break;
          case "7":
            moveList.push(7);
            break;
          case "8":
            moveList.push(8);
            break;
          case "9":
            moveList.push(9);
            break;
          default:
            continue;
        }
      }
    }
    return moveList;
  };

  return { clearBoard, updateMove, showBoard, getMoves, checkWinCondition };
})();

// Player General object factory function
const player = (playerName, character) => {
  const name = playerName;
  const playerChar = character;
  let isTurn = false;

  console.log(`Player ${name} is using : ${playerChar}`);

  const getPlayerName = () => name;

  const play = () => {
    let x = prompt("Make your move : ");
    console.log(`Your move is ${x}`);
    return x;
  };

  return { getPlayerName, play, isTurn, playerChar };
};

// Score card object

const scoreCard = (() => {
  console.log("Score Card");
  let playerOneScore = 0;
  let playerTwoScore = 0;

  const updateScores = (player1Score, player2Score) => {
    playerOneScore += player1Score;
    playerTwoScore += player2Score;
  };

  const getScores = () => {
    return { player1: playerOneScore, player2: playerTwoScore };
  };

  const resetScores = () => {
    playerOneScore = 0;
    playerTwoScore = 0;
  };

  return { updateScores, getScores, resetScores };
})();

const gameFlow = (() => {
  const player1 = player("1");
  const player2 = player("2");
  console.log("Game Flow");

  const startGame = () => {};
})();
