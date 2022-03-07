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
  // assignPlayerTokens() {
  //   this.alien.token = './assets/black-and-white-alien.png';
  //   this.computer.token = './assets/482469.png';
  // }

  assignTokens() {
    this.alien.assignPlayerTokens();
    this.computer.assignPlayerTokens();
  }

  determineGameType(gameId) {
   if (gameId === 'classic' || gameId === 'boxTitleClassic' || gameId ==='buttonClassic') {
    this.gameType = 'classic';
  } else if (gameId === 'spicy' || gameId === 'boxTitleSpicy' || gameId === 'buttonSpicy') {
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

 // this.alien.assignAlienChoice(weaponId);
  // assignAlienChoice(weaponId) {
  //   if (weaponId === 'rock') {
  //     this.alienChoice = 'rock';
  //   } else if (weaponId === 'paper') {
  //     this.alienChoice = 'paper';
  //   } else if (weaponId = 'scissors') {
  //     this.alienChoice = 'scissors';
  //   }
  // }

  // assignAlienChoiceSpicy(weaponId) {
  //   if (weaponId === 'sRock') {
  //     this.alienChoice = 'rock';
  //   } else if (weaponId === 'sPaper') {
  //     this.alienChoice = 'paper';
  //   } else if (weaponId === 'sScissors') {
  //     this.alienChoice = 'scissors';
  //   } else if (weaponId === 'sLizard') {
  //     this.alienChoice = 'lizard';
  //   } else if (weaponId === 'sAlien') {
  //     this.alienChoice = 'alien';
  //   }
  // }

  // assignComputerChoice() {
  //   var computerNum = Math.floor(Math.random() * 3);
  //   if (computerNum === 0) {
  //     this.computerChoice = 'rock';
  //   } else if (computerNum === 1) {
  //     this.computerChoice = 'paper';
  //   } else if (computerNum === 2) {
  //     this.computerChoice = 'scissors';
  //   }
  // }
  //
  // assignComputerChoiceSpicy() {
  //   var computerSpicy = Math.floor(Math.random() * 5);
  //   if (computerSpicy === 0) {
  //     this.computerChoice = 'rock';
  //   } else if (computerSpicy === 1) {
  //     this.computerChoice = 'paper';
  //   } else if (computerSpicy === 2) {
  //     this.computerChoice = 'scissors';
  //   } else if (computerSpicy === 3) {
  //     this.computerChoice = 'lizard';
  //   } else if (computerSpicy === 4) {
  //     this.computerChoice = 'alien';
  //   }
  // }

  determineWinner() {
    if (this.alien.choice === this.computer.choice) {
      this.winner = '';
      return this.isDraw = true;
    } else if (this.alien.choice === 'rock' && (this.computer.choice === 'scissors' || this.computer.choice === 'lizard')) {
      this.winner = 'alien';
    } else if (this.alien.choice === 'paper' && (this.computer.choice === 'rock' || this.computer.choice === 'alien')) {
      this.winner = 'alien';
    } else if (this.alien.choice === 'scissors' && (this.computer.choice === 'paper' || this.computer.choice === 'lizard')) {
      this.winner = 'alien';
    } else if (this.gameType === 'classic') {
      this.winner = 'computer';
    } else if (this.alien.choice === 'lizard' && (this.computer.choice === 'paper' || this.computer.choice === 'alien')) {
      this.winner = 'alien';
    } else if (this.alien.choice === 'alien' && (this.computer.choice === 'scissors' || this.computer.choice === 'rock')) {
      this.winner = 'alien';
    } else {
      this.winner = 'computer';
    }
    this.isDraw = false;
    this.updateWins();
  }

//Ask about combining lines 33-35 of main file into another method, then just calling
//the one game method in main?
  // assignChoicesAndWinner() {
  //
  // }

  updateWins() {
    if (this.winner === 'alien') {
      this.alien.takeTurn();
    } else if (this.winner === 'computer') {
      this.computer.takeTurn();
    }
  }
};
