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

//Refactor this!!
  assignPlayerTokens() {
    this.alien.token = './assets/black-and-white-alien.png';
    this.computer.token = './assets/482469.png';
  }

  determineGameType(gameId) {
   if (gameId === 'classic') {
    this.gameType = 'classic';
  } else if (gameId === 'spicy') {
    this.gameType = 'spicy';
   }
 }

 switchGameType() {
   if (this.gameType === 'classic') {
    this.gameType = 'spicy';
  } else if (this.gameType === 'spicy') {
    this.gameType = 'classic';
   }
 }

  assignAlienChoice(weaponId) {
    if (weaponId === 'rock') {
      this.alienChoice = 'rock';
    } else if (weaponId === 'paper') {
      this.alienChoice = 'paper';
    } else if (weaponId = 'scissors') {
      this.alienChoice = 'scissors';
    }
  }

    assignAlienChoiceSpicy(weaponId) {
      if (weaponId === 'sRock') {
        this.alienChoice = 'rock';
      } else if (weaponId === 'sPaper') {
        this.alienChoice = 'paper';
      } else if (weaponId === 'sScissors') {
        this.alienChoice = 'scissors';
      } else if (weaponId === 'sLizard') {
        this.alienChoice = 'lizard';
      } else if (weaponId === 'sAlien') {
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

  determineWinner() {
    if (this.alienChoice === this.computerChoice) {
      this.winner = '';
      return this.isDraw = true;
    } else if (this.alienChoice === 'rock' && (this.computerChoice === 'scissors' || this.computerChoice === 'lizard')) {
      this.winner = 'alien';
    } else if (this.alienChoice === 'paper' && (this.computerChoice === 'rock' || this.computerChoice === 'alien')) {
      this.winner = 'alien';
    } else if (this.alienChoice === 'scissors' && (this.computerChoice === 'paper' || this.computerChoice === 'lizard')) {
      this.winner = 'alien';
    } else if (this.gameType === 'classic') {
      this.winner = 'computer';
    } else if (this.alienChoice === 'lizard' && (this.computerChoice === 'paper' || this.computerChoice === 'alien')) {
      this.winner = 'alien';
    } else if (this.alienChoice === 'alien' && (this.computerChoice === 'scissors' || this.computerChoice === 'rock')) {
      this.winner = 'alien';
    } else {
      this.winner = 'computer';
    }
    this.isDraw = false;
    this.updateWins();
  }

  updateWins() {
    if (this.winner === 'alien') {
      this.alien.takeTurn();
    } else if (this.winner === 'computer') {
      this.computer.takeTurn();
    }
  }
};
