const DigitalPet = require("./DigitalPet");

const cat = new DigitalPet("Mochi", 10, 100, "MEOW");
const dog = new DigitalPet("Cho", 10, 100, "WOOF");

console.log();

cat.stats();
dog.stats();

console.log("----------\n");

cat.play();
cat.play();
cat.feed();
cat.sleep();

while (cat.isAlive() && dog.isAlive()) {
    console.log("-------------\n");

    cat.attack(dog);
    dog.attack(cat);

    console.log("\n-------------\n");

    cat.stats();
    dog.stats();
}
