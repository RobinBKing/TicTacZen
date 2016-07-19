var expect    = require("chai").expect;
var Game = require("../lib/game").Game;
// var CheckGameStatus = require("../lib/game").checkGameStatus;
// var UpdateGameboard = require("../lib/game").updateGameboard;
var Player = require("../lib/player").Player;

describe("Game", function() {
  it('should return an array for the gameboard', function() {
    var testNewGame = new Game();
    testNewGame.newGame('X', 3);
    testNewGame.newGameboardArray();
    expect(testNewGame.boardArray[1]).to.equal(' ');
  });

  it('should return an array for the gameboard guide', function() {
    var testNewGame = new Game();
    testNewGame.newGame('X', 3);
    testNewGame.newGameboardArray();
    var testGuideBoard = testNewGame.guideboardArray();
    expect(testGuideBoard[0]).to.equal("1");
  });

  it('should return an updated array based on player choice', function() {
    var currTurns = 0;
    var choice = 0;
    var playerX = new Player('X', 'X');
    var playerO = new Player('O', 'O');
    var testNewGame = new Game();
    testNewGame.newGame('X', 3);
    testNewGame.newGameboardArray();
    testNewGame.updateGameboard(1);
    expect(testNewGame.boardArray[0]).to.equal('X');
  });

  it('should toggle active player', function() {
    var currTurns = 0;
    var choice = 0;
    var playerX = new Player('X', 'X');
    var playerO = new Player('O', 'O');
    var testNewGame = new Game();
    testNewGame.newGame('X', 3);
    testNewGame.newGameboardArray();
    expect(testNewGame.activePlayer).to.equal('X');
    testNewGame.updateGameboard(1);
    testNewGame.togglePLayer();
    expect(testNewGame.activePlayer).to.equal('O');
  });

  it('should return an error message for choice not in range.', function() {
    var currTurns = 0;
    var choice = 0;
    var playerX = new Player('X', 'X');
    var playerO = new Player('O', 'O');
    var testNewGame = new Game();
    testNewGame.newGame('X', 3);
    testNewGame.newGameboardArray();
    currTurns = testNewGame.turns;
    testNewGame.updateGameboard(10);
    expect(testNewGame.turns).to.equal(currTurns);
    expect(testNewGame.state).to.equal(1);
  });

  it('should return state = 0 when all activePlayer ids in a row.', function() {
    var currTurns = 0;
    var choice = 0;
    var playerX = new Player('X', 'X');
    var playerO = new Player('O', 'O');
    var testNewGame = new Game();
    testNewGame.newGame('X', 3);
    testNewGame.newGameboardArray();
    testNewGame.updateGameboard(1);
    testNewGame.checkGameStatus();
    expect(testNewGame.state).to.equal(1);
    expect(testNewGame.turns).to.equal(1);
    testNewGame.togglePLayer();
    testNewGame.updateGameboard(4);
    testNewGame.togglePLayer();
    testNewGame.updateGameboard(2);
    testNewGame.togglePLayer();
    testNewGame.updateGameboard(7);
    testNewGame.togglePLayer();
    testNewGame.updateGameboard(3);
    testNewGame.checkGameStatus();
    expect(testNewGame.state).to.equal(0);
  });

  it('should return true when all activePlayer ids in a column.', function() {
    var currTurns = 0;
    var choice = 0;
    var playerX = new Player('X', 'X');
    var playerO = new Player('O', 'O');
    var testNewGame = new Game();
    testNewGame.newGame('X', 3);
    testNewGame.newGameboardArray();
    testNewGame.updateGameboard(1);
    testNewGame.togglePLayer();
    testNewGame.updateGameboard(2);
    testNewGame.togglePLayer();
    testNewGame.updateGameboard(4);
    testNewGame.togglePLayer();
    testNewGame.updateGameboard(3);
    testNewGame.togglePLayer();
    testNewGame.updateGameboard(7);
    testNewGame.checkGameStatus();
    expect(testNewGame.state).to.equal(0);
  });

    it('should return true when all activePlayer ids by diagonal top left to bottom right.', function() {
      var currTurns = 0;
      var choice = 0;
      var playerX = new Player('X', 'X');
      var playerO = new Player('O', 'O');
      var testNewGame = new Game();
      testNewGame.newGame('X', 3);
      testNewGame.newGameboardArray();
      testNewGame.updateGameboard(1);
      testNewGame.togglePLayer();
      testNewGame.updateGameboard(2);
      testNewGame.togglePLayer();
      testNewGame.updateGameboard(5);
      testNewGame.togglePLayer();
      testNewGame.updateGameboard(3);
      testNewGame.togglePLayer();
      testNewGame.updateGameboard(9);
      testNewGame.checkGameStatus();
      expect(testNewGame.state).to.equal(0);
    });

    it('should return added score to player.', function() {
      var currTurns = 0;
      var choice = 0;
      var testPlayerX = new Player('X', 'X');
      expect(testPlayerX.score).to.equal(0);
      testPlayerX.addToScore();
      expect(testPlayerX.score).to.equal(1);
    });
  });
