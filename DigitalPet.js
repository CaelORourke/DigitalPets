const DigitalPet = function (name = "Unnamed") {
  this.name = name;
  this.hungry = false;
  this.sleepy = false;
  this.bored = true;
  this.age = 0;
};

DigitalPet.prototype.stats = function () {
  console.log(`Name: ${this.name}`);
  console.log(`Hungry: ${this.hungry}`);
  console.log(`Sleepy: ${this.sleepy}`);
  console.log(`Bored: ${this.bored}`);
  console.log(`Age: ${this.age}`);
};

DigitalPet.prototype.feed = function () {
  if (this.hungry === true) {
    this.hungry = false;
    this.sleepy = true;
    console.log("That was yummy!");
  }
  else {
    console.log("No thanks, I'm full.");
  }
};

DigitalPet.prototype.sleep = function () {
  if (this.sleepy === true) {
    this.sleepy = false;
    this.bored = true;
    console.log("ZZzzZZZzzZZz~~");
  }
  else {
    console.log("No way! I'm not tired!");
  }
};

DigitalPet.prototype.play = function () {
  if (this.bored === true) {
    this.bored = false;
    this.hungry = true;
    console.log("Yay! Let's play!");
  }
  else {
    console.log("Not right now. Maybe later?");
  }
};

module.exports = DigitalPet;