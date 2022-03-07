class Player {
  constructor(player) {
    this.name = player;
    this.choice = '';
    this.token = '';
    this.wins = 0;
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
    if (weaponId === 'rock') {
      this.choice = 'rock';
    } else if (weaponId === 'paper') {
      this.choice = 'paper';
    } else if (weaponId = 'scissors') {
      this.choice = 'scissors';
    }
  }

  assignAlienChoiceSpicy(weaponId) {
    if (weaponId === 'sRock') {
      this.choice = 'rock';
    } else if (weaponId === 'sPaper') {
      this.choice = 'paper';
    } else if (weaponId === 'sScissors') {
      this.choice = 'scissors';
    } else if (weaponId === 'sLizard') {
      this.choice = 'lizard';
    } else if (weaponId === 'sAlien') {
      this.choice = 'alien';
    }
  }

  assignComputerChoice() {
    var computerNum = Math.floor(Math.random() * 3);
    if (computerNum === 0) {
      this.choice = 'rock';
    } else if (computerNum === 1) {
      this.choice = 'paper';
    } else if (computerNum === 2) {
      this.choice = 'scissors';
    }
  }

  assignComputerChoiceSpicy() {
    var computerSpicy = Math.floor(Math.random() * 5);
    if (computerSpicy === 0) {
      this.choice = 'rock';
    } else if (computerSpicy === 1) {
      this.choice = 'paper';
    } else if (computerSpicy === 2) {
      this.choice = 'scissors';
    } else if (computerSpicy === 3) {
      this.choice = 'lizard';
    } else if (computerSpicy === 4) {
      this.choice = 'alien';
    }
  }

  //I don't know if I want to turn these into an array? It could make this
  //function cleaner, but then I add another variable to deal with?
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

//Add a new key value pair in each player class
//This will keep track of each player's current choice
//Keep the functionality that will compare alien choice
//to computer choice in the game file
//Might have to add another parameter to allow a choice?
//Or, can make a condtional that checks = if this.name === this.choice =
//if this.name === computer then assign randomly (Irmak's version of this
//function would reduce total lines of code?)
//Invoke the choose function on the players in the game class
//this.alien.chooseWeapon() this.computer.chooseWeapon

//The determine winner function would need to be refactored
//Would probably need one of each .chooseClassicWeapon and chooseSpicyWeapon
//would invoke the correct one on the player class depending on what's clicked

//I'm leaving takeTurn as is? Fuck it

//In the main file, assignAlienChoice, assignComputerChoice, ... would get real
//spicy


//Finally, if that gets refactored and I can maintain functionality,
//I'll revisit my token assigning functions
