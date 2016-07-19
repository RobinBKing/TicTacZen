function Player(playerName, piece) {
  this.playerName = playerName;
  this.id = piece;
  this.score = 0;
};
Player.prototype.addToScore = function() {
  this.score += 1;
};

//set based on node or web interface
if(typeof module != "undefined") {
  module.exports = {
    Player: Player
  };
};
