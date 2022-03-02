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

    assignAlienChoiceSpicy(event) {
      var alienWeaponS = event.target.id;
      if (alienWeaponS === 'sRock') {
        this.alienChoice = 'rock';
      } else if (alienWeaponS === 'sPaper') {
        this.alienChoice = 'paper';
      } else if (alienWeaponS === 'sScissors') {
        this.alienChoice = 'scissors';
      } else if (alienWeaponS === 'sLizard') {
        this.alienChoice = 'lizard';
      } else if (alienWeaponS === 'sAlien') {
        this.alienChoice = 'alien';
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

  assignComputerChoiceSpicy() {
    var computerSpicy = Math.floor(Math.random() * 5);
    if (computerSpicy === 0) {
      this.computerChoice = 'rock';
    } else if (computerSpicy === 1) {
      this.computerChoice = 'paper';
    } else if (computerSpicy === 2) {
      this.computerChoice = 'scissors';
    } else if (computerSpicy === 3) {
      this.computerChoice = 'lizard';
    } else if (computerSpicy === 4) {
      this.computerChoice = 'alien';
    }
  }

//The draw property isn't changing to true, not sure why?
  determineWinner() {
    if (this.alienChoice === this.computerChoice) {
      this.winner = 'No winner!';
      this.isDraw = true;
    } else if (this.alienChoice === 'rock' && (this.computerChoice === 'scissors' || this.computerChoice === 'lizard')) {
      this.winner = 'alien';
    } else if (this.alienChoice === 'paper' && (this.computerChoice === 'rock' || this.computerChoice === 'alien')) {
      this.winner = 'alien';
    } else if (this.alienChoice === 'scissors' && (this.computerChoice === 'paper' || this.computerChoice === 'lizard')) {
      this.winner = 'alien';
    } else if (this.gameType === 'classic'){
      this.winner = 'computer';
    } else if (this.alienChoice === 'lizard' && (this.computerChoice === 'paper' || this.computerChoice === 'alien')) {
      this.winner = 'alien';
    } else if (this.alienChoice === 'alien' && (this.computerChoice === 'scissors' || this.computerChoice === 'rock')) {
      this.winner = 'alien';
    } else {
      this.winner = 'computer';
    }
    this.updateWins();
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
    //This will probably get moved to main.js??
  }

  resetBoard() {

  }
};

//this. in front of methods
