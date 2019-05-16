const DigitalPet = require("./DigitalPet");

const cat = new DigitalPet("Mochi");

console.log("\n");

cat.stats();

console.log("\n----------\n");

cat.play();
cat.play();
cat.feed();
cat.sleep();

console.log("\n");