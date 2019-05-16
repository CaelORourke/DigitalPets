const DigitalPet = require("./DigitalPet");

const playerOne = new DigitalPet("Mochi", 12, 8, 100, "MEOW");
const playerTwo = new DigitalPet("Cho", 8, 10, 100, "WOOF");

console.log("\nINTRO:\n");

playerOne.stats();
playerTwo.stats();

console.log("----------\n");

playerOne.play();
playerOne.play();
playerOne.feed();
playerOne.sleep();

console.log();

let turn = 0;
while (playerOne.isAlive() && playerTwo.isAlive()) {
    turn += 1;
    console.log("-------------\n");
    console.log(`TURN: ${turn}\n`);

    playerOne.attack(playerTwo);
    playerTwo.attack(playerOne);

    console.log();

    playerOne.stats();
    playerTwo.stats();
}
