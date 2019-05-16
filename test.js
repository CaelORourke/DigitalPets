const DigitalPet = require("./DigitalPet");

const cat = new DigitalPet("Mochi");
const dog = new DigitalPet("Cho");

console.log();

cat.stats();
dog.stats();

console.log("----------\n");

cat.play();
cat.play();
cat.feed();
cat.sleep();

console.log("\n-------------\n");

cat.attack(dog);
dog.attack(cat);

console.log("\n-------------\n");

cat.stats();
dog.stats();
