function WebGamePresenter() {
  this.playerX;
  this.playerO;
  this.Game;
};
WebGamePresenter.prototype.newPlayers = function(playerXName, plaerOName) {
  this.playerX = new Player(playerXName, 'X');
  this.playerO = new Player(playerOName, 'O');
};
WebGamePresenter.prototype.newGame = function(activePlayer, boardWidthLength) {
  this.Game.newGame(activePlayer, boardWidthLength);
  this.Game.newGameboardArray();
};
WebGamePresenter.prototype.updateGameboard = function(choice) {
  this.Game.updateGameboard(choice);
};
WebGamePresenter.prototype.checkGameStatus = function() {
  this.Game.checkGameStatus(t);
};
WebGamePresenter.prototype.setPlayerScore = function () {
  if (this.Game.activePlayer === playerX.id) {
    this.playerX.addToScore();
  } else {
    this.pLayerO.addToScore();
  }
};
WebGamePresenter.prototype.validateAnswer = function (answer) {
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
WebGamePresenter.prototype.isNumeric = function(num){
  if (num.length !== 0) {
    return !isNaN(num)
  }
  else {
    return false;
  };
};

var newWebGamePresenter = new WebGamePresenter();
//interface
$(document).ready(function() {
    $('#playBtn').click(function () {
        $('.X').removeClass('active');
    $('.O').removeClass('active');

    var newGame = new Game();
    newWebGamePresenter.Game = newGame;
    var currTurns = 0; //used to check if turns accumulated
    var choice = 0; //holds line info as in numeric
    var playerXName = $('input#playerXName').val();
    if (playerXName === '') {
        playerXName = 'X';
    }
    var playerOName = $('input#playerOName').val();
    if (playerOName === '') {
      playerOName = 'O';
    }
    var boardSize = $('select#boardSelect').val();
    if (!boardSize) {
      boardSize = 3;
    }
    var newActivePlayer = 'X';
    alert('Click on the player that goes first.');
    $('img#playerXIcon').click(function () {
      newActivePlayer = 'X';
    });
    $('img#playerOIcon').click(function () {
      newActivePlayer = 'O';
    });
    console.log(newActivePlayer);
    newWebGamePresenter.newPlayers(playerXName, playerOName);
    newWebGamePresenter.newGame(newActivePlayer, boardSize);
    newWebGamePresenter.Game.newGameboardArray();

    $(".cell").click(function(){
      if(newWebGamePresenter.Game.state === 1) {
        if (newWebGamePresenter.Game.turns < newWebGamePresenter.Game.boardSize()) {
          if ( $(this).children('.O').hasClass('active') || $(this).children('.X').hasClass('active')){
            alert('This one is taken. Try another.');
          } else{
            $(this).children('.' + newWebGamePresenter.Game.activePlayer).addClass('active');
            for (i=1; i<newWebGamePresenter.Game.boardSize()+1; i++){
              var selected = $('.cell:nth-child('+i.toString()+')').children('.'+newWebGamePresenter.Game.activePlayer).hasClass('active');
              if (selected){
                alert(selected);
                newWebGamePresenter.Game.updateGameboard(i);
              };
                newWebGamePresenter.Game.checkGameStatus();
                alert(newWebGamePresenter.Game.state);
                if(newWebGamePresenter.Game.state === 1) {
                  newWebGamePresenter.Game.togglePLayer();
                } else {
                  alert(newWebGamePresenter.Game.activePlayer + ' Wins!');
                };
              };

          };
        };
      };
    });
  });
});
