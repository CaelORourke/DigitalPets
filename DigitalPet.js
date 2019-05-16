const DigitalPet = function (name = "Unnamed", strength = 10, hitpoints = 100) {
  this.age = 0;
  this.bored = true;
  this.hitpoints = hitpoints;
  this.hungry = false;
  this.maxHitpoints = hitpoints;
  this.name = name;
  this.sleepy = false;
  this.strength = strength;
};

DigitalPet.prototype.attack = function (defender) {
  if (this.hitpoints > 0) {
    this.hungry = true;
    defender.hitpoints -= this.strength;
    console.log(`${this.name} attacks ${defender.name}!`);
  }
};

DigitalPet.prototype.feed = function () {
  if (this.hungry === true) {
    this.hungry = false;
    this.sleepy = true;
    if (this.hitpoints < this.maxHitpoints) {
      if (this.hitpoints < this.maxHitpoints - 5) {
        this.hitpoints += 5;
      }
      else {
        this.hitpoints = this.maxHitpoints;
      }
    }
    console.log(`${this.name} says, "That was yummy!"`);
  }
  else {
    console.log(`${this.name} says, "No thanks, I'm full."`);
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

DigitalPet.prototype.sleep = function () {
  if (this.sleepy === true) {
    this.bored = true;
    this.sleepy = false;
    console.log(`${this.name} says, "ZZzzZZZzzZZz~~"`);
  }
  else {
    console.log(`${this.name} says, "No way! I'm not tired!"`);
  }
};

DigitalPet.prototype.stats = function () {
  console.log(`Name:\t${this.name}`);
  console.log(`Age:\t${this.age}`);
  console.log(`Str:\t${this.strength}`);
  console.log(`Hp:\t${this.hitpoints}/${this.maxHitpoints}`);
  console.log(`State:${this.bored ? "\tBored" : ""}${this.hungry ? "\tHungry" : ""}${this.sleepy ? "\tSleepy" : ""}\n`);
};

module.exports = DigitalPet;