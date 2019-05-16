const DigitalPet = require("./DigitalPet");

const cat = new DigitalPet("Mochi", 12, 8, 100, "MEOW");
const dog = new DigitalPet("Cho", 8, 10, 100, "WOOF");

console.log();

cat.stats();
dog.stats();

console.log("----------\n");

cat.play();
cat.play();
cat.feed();
cat.sleep();

let turn = 0;
while (cat.isAlive() && dog.isAlive()) {
    turn += 1;
    console.log("-------------\n");
    console.log(`TURN: ${turn}\n`);

    cat.attack(dog);
    dog.attack(cat);

    // console.log("\n-------------\n");
    console.log();

    cat.stats();
    dog.stats();
}
