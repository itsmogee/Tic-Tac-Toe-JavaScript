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
      return true;
    }
    if (board[1][0] === board[1][1] && board[1][2] === board[1][0]) {
      return true;
    }
    if (board[2][0] === board[2][1] && board[2][2] === board[2][0]) {
      return true;
    }
    if (board[0][0] === board[1][0] && board[2][0] === board[0][0]) {
      return true;
    }
    if (board[0][0] === board[1][0] && board[2][0] === board[0][0]) {
      return true;
    }
    if (board[0][1] === board[1][1] && board[2][1] === board[0][1]) {
      return true;
    }
    if (board[0][0] === board[1][1] && board[2][2] === board[0][0]) {
      return true;
    }
    if (board[0][2] === board[1][1] && board[2][0] === board[0][2]) {
      return true;
    }
    if (board[0][2] === board[1][2] && board[2][2] === board[0][2]) {
      return true;
    }
    return false;
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
        if (board[i][j] === playerMove) {
          board[i][j] = playerChar;
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
    const moveList = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
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
    const x = prompt("Make your move : ");
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
  const player1 = player("1", "O");
  const player2 = player("2", "X");
  console.log("Welcome to Tic-Tac-Toe");

  const initializeGame = () => {
    console.log("Initializing Game");
    player2.isTurn = false;
    player1.isTurn = true;
    gameBoard.clearBoard();
  };

  const getPlayerTurn = () => {
    let currentPlayer;
    if (player1.isTurn) {
      console.log("It is Player 1's Turn");
      currentPlayer = player1;
    } else {
      console.log("It is Player 2's Turn");
      currentPlayer = player2;
    }
    return currentPlayer;
  };

  const showGameState = () => {
    const currentPlayer = getPlayerTurn();

    // Check valid move list
    const moves = gameBoard.getMoves();
    console.log(`The possible moves are : `);
    console.log(moves);

    //Present a valid set of move options
    //gameBoard.showBoard();

    return currentPlayer;
  };

  const swapTurns = () => {
    player1.isTurn = !player1.isTurn;
    player2.isTurn = !player2.isTurn;
  };

  const playMove = () => {
    // Show Game State
    const currentPlayer = showGameState();

    // player will choose
    let move = false;
    let choice;
    while (!move) {
      choice = currentPlayer.play();
      if (choice === "q") {
        console.log("Quitting game");
        return choice;
      }
      move = gameBoard.updateMove(choice, currentPlayer.playerChar);
    }
    gameBoard.showBoard();

    const winner = gameBoard.checkWinCondition();
    if (winner) {
      if (currentPlayer === player1) {
        scoreCard.updateScores(1, 0);
      } else {
        scoreCard.updateScores(0, 1);
      }
      alert(`Player ${currentPlayer.getPlayerName()} is the winner`);
      return "W";
    }

    swapTurns();
  };

  const startRound = () => {
    // initialize the game
    initializeGame();
    gameBoard.showBoard();

    let numMoves = 0;
    let move = "";
    // main game loop
    while (numMoves < 9) {
      move = playMove();
      if (move === "q") {
        return;
      }
      if (move === "W") {
        console.log("Game Ended");
        return;
      }
      numMoves += 1;
    }
    alert("Game ended in a tie");

    // update score cards
  };

  const startGame = () => {
    const numRounds = prompt("How many rounds would you like to play ?");

    for (let i = 0; i < numRounds; i++) {
      gameFlow.startRound();
      console.log(scoreCard.getScores());
    }
  };

  return { startRound, initializeGame, startGame };
})();

gameFlow.startGame();
