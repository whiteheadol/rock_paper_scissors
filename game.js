class Game {
  constructor() {
    this.gameType = '';
    this.alien = new Player('alien');
    this.computer = new Player('computer');
    this.isDraw = false;
    this.winner = '';
  }

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

  assignChoices(weaponId) {
    this.alien.assignAlienChoice(weaponId);
    this.computer.assignComputerChoice();
  }

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
