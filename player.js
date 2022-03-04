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
