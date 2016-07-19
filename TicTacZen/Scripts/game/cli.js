var Game = require("./lib/game").Game;
var CheckGameStatus = require("./lib/game").checkGameStatus;
var UpdateGameboard = require("./lib/game").updateGameboard;
var Player = require("./lib/player").Player;
 
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var currTurns = 0; //used to check if turns accumulated
var choice = 0; //holds line info as in numeric
//set players
var playerX = new Player('X', 'X');
var playerO = new Player('O', 'O');

//set up new game
var newGame = new Game();
//set defaults
newGame.newGame('X', 3);
newGame.newGameboardArray();
// enter choice message
console.log('Enter the corresponding number.\r\n');
// print a guide gameboard
printGameboard(newGame.guideboardArray());
// print a new gameboard
printGameboard(newGame.boardArray);
//set up player prompt
rl.setPrompt('Player ' + newGame.activePlayer + '> ');
rl.prompt();

rl.on('line', (line) => {
  if (newGame.state === 1) {
    if (isNumeric(line.trim())) {
      choice = parseInt(line.trim());
      if (choice < 1 || choice > newGame.boardSize()) {
        console.log('Sorry, that number is not an option.\r\n');
      } else {
        //update the board with the players choice
        currTurns = newGame.turns;
        newGame = UpdateGameboard(choice, newGame);
        if (newGame.turns === currTurns) {
          console.log('That one is taken. Choose another.\r\n'); //nunber is taken
        } else {
          // print a guide gameboard
          printGameboard(newGame.guideboardArray());
          // print a updated gameboard
          printGameboard(newGame.boardArray);
        };
      };
    };
  };

  newGame = CheckGameStatus(newGame); //set game state
  if (newGame.state === 1) {
    newGame.togglePLayer();
    rl.setPrompt('Player '+ newGame.activePlayer + '> ');
    rl.prompt();
  } else {
    if (newGame.state === 0) {
      if (newGame.turns < newGame.boardSize() + 1) {
        console.log('Player ' + newGame.activePlayer + 'Wins!\r\n');
        setPlayerScore();
      } else if (newGame.turns > newGame.boardSize() ) {
        console.log('Its a Tie!\r\n');
      };
      console.log('Score:\r\n' + playerX.id + ': ' + playerX.score + '\r\n' + playerO.id + ': ' + playerO.score);
      rl.question('Do you want to play again?'), (answer) => {
        var newAnswer = validateAnswer(answer);
        switch (newAnswer) {
          case 'N':
            console.log('K, bye!\r\n');
            rl.close();
            break;
          case 'Y':
            currTurns = 0;
            choice = 0;
            //set up new game
            var newGame = new Game();
            //set defaults
            newGame.newGame('X', 3);
            newGame.newGameboardArray();
            //set active player
            newGame.activePlayer = newGame.players[0];
            // enter choice message
            console.log('Enter the corresponding number.\r\n');
            // print a guide gameboard
            printGameboard(newGame.guideboardArray());
            // print a new gameboard
            printGameboard(newGame.boardArray);
            //set up player prompt
            rl.setPrompt('Player ' + newGame.activePlayer + '> ');
            rl.prompt();
            break;
          default:
            if (newGame.state === 0) {
              console.log('Please answer Yes (Y) or No (N).\r\n');
              rl.close();
            };
            break;
        };
      };
    };
  };
  // if (newGame.state === 0) {
  //   if (newGame.turns < newGame.boardSize() + 1) {
  //     console.log('Player ' + newGame.activePlayer + 'Wins!\r\n');
  //     setPlayerScore();
  //   } else if (newGame.turns > newGame.boardSize() ) {
  //     console.log('Its a Tie!\r\n');
  //   };
  //   console.log('Score:\r\n' + playerX.id + ': ' + playerX.score + '\r\n' + playerO.id + ': ' + playerO.score);
  //   rl.question('Do you want to play again?'), (answer) => {
  //     var newAnswer = validateAnswer(answer);
  //     switch (newAnswer) {
  //       case 'N':
  //         console.log('K, bye!\r\n');
  //         rl.close();
  //         break;
  //       case 'Y':
  //         currTurns = 0;
  //         choice = 0;
  //         //set up new game
  //         var newGame = new Game();
  //         //set defaults
  //         newGame = setupNewGame(newGame);
  //         //set active player
  //         newGame.activePlayer = newGame.players[0];
  //         // enter choice message
  //         console.log('Enter the corresponding number.\r\n');
  //         // print a guide gameboard
  //         printGameboard(newGame.guideboardArray());
  //         // print a new gameboard
  //         printGameboard(newGame.boardArray);
  //         //set up player prompt
  //         rl.setPrompt('Player ' + newGame.activePlayer + '> ');
  //         rl.prompt();
  //         break;
  //       default:
  //         if (newGame.state === 0) {
  //           console.log('Please answer Yes (Y) or No (N).\r\n');
  //           rl.close();
  //         };
  //         break;
  //     };
  //   };
  // };
});

function setupNewGame(newGame, activePlayer='X', boardWithLength='3') {
  newGame.state = 1;
  newGame.turns = 0;
  newGame.activePlayer = activePlayer;
  newGame.boardWidth = boardWithLength;
  newGame.boardLength = boardWithLength;
  newGame.newGameboardArray();

  return newGame;
};

function setPlayerScore() {
  if (newGame.activePlayer === playerX.id) {
    playerX.addToScore();
  } else {
    pLayerO.addToScore();
  }
}

//returns a validad answer
function validateAnswer(answer) {
  switch (answer.toUpperCase()) {
    case 'YES':
    case 'Y':
      return 'Y';
    case 'NO':
    case 'N':
      return 'N';
    default:
      return '';
  };
};

//check if a string is numeric
function isNumeric(num){
  if (num.length !== 0)
    return !isNaN(num)
  else {
    return false;
  };
};

//prints a gameboard to the console
function printGameboard(gameboard) {
  console.log('\r\n' + gameboard[0] + ' | ' + gameboard[1]  + ' | ' + gameboard[2] + '\r\n' + '- + - + -' + '\r\n' + gameboard[3] + ' | ' + gameboard[4] + ' | ' + gameboard[5] + '\r\n' + '- + - + -' + '\r\n' + gameboard[6] + ' | ' + gameboard[7] + ' | ' + gameboard[8] + '\r\n');
};
