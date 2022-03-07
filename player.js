class Player {
  constructor(player) {
    this.name = player;
    this.choice = '';
    this.token = '';
    this.wins = 0;
    this.classicWeapons = ['rock', 'paper', 'scissors'];
    this.spicyWeapons = ['rock', 'paper', 'scissors', 'lizard', 'alien'];
  }

  takeTurn() {
    this.wins++;
  }

  assignPlayerTokens() {
    if (this.name === 'alien') {
      this.token = './assets/black-and-white-alien.png';
    } else {
      this.token = './assets/482469.png';
    }
  }

  assignAlienChoice(weaponId) {
    if (weaponId === 'rock' || weaponId === 'sRock') {
      this.choice = 'rock';
    } else if (weaponId === 'paper' || weaponId === 'sPaper') {
      this.choice = 'paper';
    } else if (weaponId = 'scissors' || weaponId === 'sScissors') {
      this.choice = 'scissors';
    } else if (weaponId === 'sLizard') {
      this.choice = 'lizard';
    } else if (weaponId === 'sAlien') {
      this.choice = 'alien';
    }
  }

  assignComputerChoice() {
    if (currentGame.gameType === 'classic') {
      this.choice = this.classicWeapons[Math.floor(Math.random() * 3)];
    } else if (currentGame.gameType === 'spicy') {
      this.choice = this.spicyWeapons[Math.floor(Math.random() * 5)];
    }
  }

  changeToken() {
    if (this.token === './assets/black-and-white-alien.png') {
      this.token = './assets/pink-alien.png';
    } else if (this.token === './assets/pink-alien.png') {
      this.token = './assets/blue-alien.png';
    } else if (this.token === './assets/blue-alien.png') {
      this.token = './assets/black-and-white-alien.png';
    }
  }
};
