class Player {
  constructor(player) {
    this.name = player;
    this.token = '';
    this.wins = 0;
  }

  takeTurn() {
    this.wins++;
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
