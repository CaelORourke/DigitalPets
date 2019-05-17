const DigitalPet = require("./DigitalPet");

const playerOne = new DigitalPet("Mochi", 12, 8, 100, "MEOW");
const playerTwo = new DigitalPet("Cho", 8, 10, 100, "WOOF");

const Game = {
    turn: 0,
    intro: function() {
        console.log("\nINTRO:\n");
        playerOne.stats();
        playerTwo.stats();
    },
    feed: function() {
        playerOne.feed();
    },
    fluff: function() {
        playerOne.play();
        playerOne.play();
        playerOne.feed();
        playerOne.sleep();
    },
    play: function() {
        playerOne.play();
    },
    sleep: function() {
        playerOne.sleep();
    },
    stats: function() {
        playerOne.stats();
    },
    help: function() {
        console.log(`\nEnter a command:

    battle\t=>\tstart a pet battle
    exit\t=>\tquit Digital Pet
    feed\t=>\tfeed your pet
    help\t=>\tget a list of commands
    play\t=>\tplay with your pet
    sleep\t=>\ttell your pet to sleep
    stats\t=>\tview your pet's stats\n`)
    },
    takeTurn: function() {
        if (playerOne.isAlive() && playerTwo.isAlive()) {
            this.turn += 1;

            console.log(`\nTURN: ${this.turn}\n`);

            playerOne.attack(playerTwo);
            playerTwo.attack(playerOne);

            console.log();

            playerOne.stats();
            playerTwo.stats();
        }
    }
};

module.exports = Game;