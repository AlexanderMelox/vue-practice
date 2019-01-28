new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
  },
  methods: {
    startGame: function () {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    attack: function () {
      this.playerAttacks(3, 12);
      this.monsterAttacks();
    },
    specialAttack: function () {
      this.playerAttacks(10, 20);
      this.monsterAttacks();
    },
    heal: function () {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }
      this.turns.unshift({
        isPlayer: true,
        text: 'Player heals for 10'
      });
      this.monsterAttacks();
    },
    giveUp: function () {
      this.gameIsRunning = false;
    },
    playerAttacks: function (min, max) {
      // Player does damage to the monster (randomly)
      const damage = this.calculateDamage({ min: min, max: max });
      this.monsterHealth -= damage;
      // Pushes the turn to the beginning of the turns array
      this.turns.unshift({
        isPlayer: true,
        text: `Player hits monster ${damage >= 12 ? ' hard ' : ''} for ${damage}`
      });
      // Check to see if someone won the game
      if (this.checkWin()) return;
    },
    monsterAttacks: function () {
      const damage = this.calculateDamage({ min: 5, max: 12 });
      // Monster does damage to player from 5-11 dmg (randomly)
      this.playerHealth -= damage;
      // Pushes the turn to the beginning of the turns array
      this.turns.unshift({
        isPlayer: false,
        text: 'Monster hits player for ' + damage
      });
      // Check to see if someone won the game
      this.checkWin();
    },
    calculateDamage: function ({ min, max }) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin: function () {
      // Checks to see if the monster's health is <= 0
      if (this.monsterHealth <= 0) {
        // Checks if the user wants to start a new game
        this.playAgain('You won! New game?');

        // Returns true -> game is over
        return true;
        // Checks to see if the player's health is less than 0
      } else if (this.playerHealth <= 0) {
        // Checks if the user wants to start a new game
        this.playAgain('You lost! New game?');

        // Returns true -> game is over
        return true
      }
      // Game continues
      return false;
    },
    playAgain: function (message) {
      if (confirm(message)) {
        // Starts a new game
        this.startGame();
      } else {
        // Set the gameIsRunning state to false
        this.gameIsRunning = false;
      }
    }
  }
});