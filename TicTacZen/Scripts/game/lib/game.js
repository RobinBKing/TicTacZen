function GameState () {
  this.inactive = 0;
  this.active = 1;
};

function Game(){
  this.state = 1;
  this.turns = 0;
  this.activePlayer = '';
  this.boardWidth = 0;
  this.boardLength = 0;
  this.boardArray = [];
};
Game.prototype.newGame = function(activePlayer, boardWidthLength) {
  this.activePlayer = activePlayer;
  this.boardWidth = boardWidthLength;
  this.boardLength = boardWidthLength;
}
Game.prototype.boardSize = function() {
  return this.boardWidth * this.boardLength;
};
Game.prototype.guideboardArray = function() {
  var guideboardArray = [];
    for (var i = 1; i < (this.boardSize() + 1); i++){
      guideboardArray.push(i.toString());
    };
  return guideboardArray;
};
Game.prototype.newGameboardArray = function() {
  this.boardArray = []; 
  for (var i = 0; i < (this.boardSize()); i++){
    this.boardArray.push(' ');
  };
  return this.boardArray;
};
Game.prototype.togglePLayer = function () {
  switch (this.activePlayer) {
    case 'X':
      this.activePlayer = 'O';
      break;
    case 'O':
      this.activePlayer = 'X';
      break;
    default:
      newGame.activePlayer = 'X';
      break;
  };
};
Game.prototype.updateGameboard = function(choice) {
  choice -= 1;
  if (this.boardArray[choice] === ' ') {
    this.boardArray[choice] = this.activePlayer;
    this.turns += 1;
  };
};
Game.prototype.checkGameStatus = function() {
  var boardLine = [];
  //check by rows
  for(li = 0; li < this.boardLength; li++) {
    for(wi = this.boardWidth * li; wi < this.boardWidth * (li + 1); wi++) {
      //load the row
      if (this.boardArray[wi] === this.activePlayer) {
        boardLine.push(this.boardArray[wi]);
      };
    };
    //check for opposite's value in array
    if (boardLine.length === this.boardWidth) {
      this.state = 0; //whole row matched the activePlayer. A win.
      break;
    };
    //not all matching the activePlayer
    boardLine = [];
  };

  if (this.state === 1) {
    //search by column
    var boardLine = [];
    for(wi = 0; wi < this.boardWidth; wi++) {
      //for each column
      for(li = 0; li < this.boardLength; li++) {
        //load the column
        if (this.boardArray[(li * this.boardWidth) + wi] === this.activePlayer) {
          boardLine.push(this.boardArray[(li * this.boardWidth) + wi])
        };
      };
      if (boardLine.length === this.boardLength) {
        this.state = 0; //whole column matched the activePlayer. A win.
        break;
      };
      //not all matching the activePlayer
      boardLine = [];
    };
  };

  if (this.state === 1) {
    //search by diagonal top left to bottom right.
    var boardLine = [];
    for(wi = 0; wi < this.boardWidth; wi++) {
      //for each column
      for(li = wi; li < wi + 1; li++) {
        //load the column
        if (this.boardArray[(li * this.boardWidth) + wi] === this.activePlayer) {
          boardLine.push(this.boardArray[(wi * this.boardWidth) + wi])
        };
      };
    };
    if (boardLine.length === this.boardLength) {
      this.state = 0; //whole diagonal matched the activePlayer. A win.
    };
  };

  if (this.state === 1) {
    //search by diagonal top right to bottom left.
    var boardLine = [];
    for(wi = 1; wi < this.boardWidth + 1; wi++) {
      //for each column
      for(li = wi * 2; li < (wi * 2) + 1; li++) {
        //load the column
        if (this.boardArray[li] === this.activePlayer) {
          boardLine.push(this.boardArray[li])
        };
      };
    };
    if (boardLine.length === this.boardLength) {
      this.state = 0; //whole diagonal matched the activePlayer. A win.
    };
  };
};

//detrmines if running node or web interface
if(typeof module != "undefined") {
  module.exports = {
    Game: Game,
  }
};
