class Game {
  constructor() {
    this.gameType = '';
    this.alien = new Player('alien');
    this.computer = new Player('computer');
    this.alienChoice = '';
    this.computerChoice = '';
    this.isDraw = false;
    this.winner = '';
  }

  determineGameType(event) {
    var gameId = event.target.id;
    for (var i = 0; i < 2; i++) {
      if (gameOption[i].id === gameId) {
        this.gameType = gameId;
      }
    }
  }

  assignAlienChoice() {
    
  }

  assignComputerChoice() {

  }

  updateWins() {
    //Depending on who wins game, update their wins
  }

  displayWins() {
    //Show the current wins in the browser
  }

  resetBoard() {

  }
};

//this. in front of methods
