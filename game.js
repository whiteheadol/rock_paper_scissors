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

  assignAlienChoice(event) {
    var alienWeapon = event.target.id;
      if (alienWeapon === 'rock') {
        this.alienChoice = 'rock';
      } else if (alienWeapon === 'paper') {
        this.alienChoice = 'paper';
      } else if (alienWeapon = 'scissors') {
        this.alienChoice = 'scissors';
      }
    }

  assignComputerChoice() {
    var computerNum = Math.floor(Math.random() * 3);
    if (computerNum === 0) {
      this.computerChoice = 'rock';
    } else if (computerNum === 1) {
      this.computerChoice = 'paper';
    } else if (computerNum === 2) {
      this.computerChoice = 'scissors';
    }
  }

  determineWinner() {
    if (this.alienChoice === this.computerChoice) {
      this.isDraw = true;
    } else if (this.alienChoice === 'rock' && this.computerChoice === 'scissors') {
      this.winner = 'alien';
    } else if (this.alienChoice === 'paper' && this.computerChoice === 'rock') {
      this.winner = 'alien';
    } else if (this.alienChoice === 'scissors' && this.computerChoice === 'paper') {
      this.winner = 'alien';
    } else {
      this.winner = 'computer';
    }
  }

  updateWins() {
    if (this.winner === 'alien') {
      this.alien.takeTurn();
    } else if (this.winner === 'computer') {
      this.computer.takeTurn();
    }
  }

  displayWins() {
    //Show the current wins in the browser
  }

  resetBoard() {

  }
};

//this. in front of methods
