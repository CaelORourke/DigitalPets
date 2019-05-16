const DigitalPet = function (name = "Unnamed", strength = 10, hitpoints = 100) {
  this.name = name;
  this.hungry = false;
  this.sleepy = false;
  this.bored = true;
  this.age = 0;
  this.strength = strength;
  this.hitpoints = hitpoints;
};

DigitalPet.prototype.stats = function () {
  console.log(`Name:\t${this.name}`);
  console.log(`Hungry:\t${this.hungry}`);
  console.log(`Sleepy:\t${this.sleepy}`);
  console.log(`Bored:\t${this.bored}`);
  console.log(`Age:\t${this.age}`);
  console.log(`Str:\t${this.strength}`);
  console.log(`Hp:\t${this.hitpoints}\n`);
};

DigitalPet.prototype.feed = function () {
  if (this.hungry === true) {
    this.hungry = false;
    this.sleepy = true;
    console.log(`${this.name} says, "That was yummy!"`);
  }
  else {
    console.log(`${this.name} says, "No thanks, I'm full."`);
  }
};

DigitalPet.prototype.sleep = function () {
  if (this.sleepy === true) {
    this.sleepy = false;
    this.bored = true;
    console.log(`${this.name} says, "ZZzzZZZzzZZz~~"`);
  }
  else {
    console.log(`${this.name} says, "No way! I'm not tired!"`);
  }
};

DigitalPet.prototype.play = function () {
  if (this.bored === true) {
    this.bored = false;
    this.hungry = true;
    console.log(`${this.name} says, "Yay! Let's play!"`);
  }
  else {
    console.log(`${this.name} says, "Not right now. Maybe later?"`);
  }
};

DigitalPet.prototype.isAlive = function () {
  if (this.hitpoints > 0) {
    return true;
  }
  else {
    return false;
  }
};

DigitalPet.prototype.attack = function (defender) {
  if (this.hitpoints > 0) {
    defender.hitpoints -= this.strength;
    console.log(`${this.name} attacks ${defender.name}!`);
  }
};

module.exports = DigitalPet;