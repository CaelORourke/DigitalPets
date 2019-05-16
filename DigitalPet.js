const DigitalPet = function (name = "Unnamed", ac = 5, strength = 10, hitpoints = 100, noise = "Hmm") {
  this.age = 0;
  this.armorClass = ac;
  this.bored = true;
  this.hitpoints = hitpoints;
  this.hungry = false;
  this.maxHitpoints = hitpoints;
  this.name = name;
  this.noise = noise;
  this.sleepy = false;
  this.strength = strength;
};

DigitalPet.prototype.attack = function (defender) {
  if (this.hitpoints > 0) {
    this.hungry = true;
    let attack = Math.floor((Math.random() * 20) + 1) + this.strength;
    if (attack <= defender.armorClass) {
      console.log(`${this.name} misses!`);
    }
    else {
      let damage = Math.floor((Math.random() * this.strength) + 1);
      defender.hitpoints -= damage;
      console.log(`${this.name} attacks ${defender.name} for ${damage} point${damage > 1 ? "s" : ""}!`);

      if (defender.hitpoints <= 0) {
        console.log("\n-------------\n");
        console.log(`${defender.name} has been defeated!\n`);
        this.levelUp();
      }
    }
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

DigitalPet.prototype.levelUp = function () {
  this.age += 1;
  this.hitpoints += 25;
  this.maxHitpoints += 25;
  this.strength += 5;
  console.log("-------------\n");
  console.log(`${this.name} levels up!`);
  this.makeNoise();
};

DigitalPet.prototype.makeNoise = function () {
  console.log(`${this.noise}!`);
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
  console.log(`Ac:\t${this.armorClass}`);
  console.log(`Hp:\t${this.hitpoints}/${this.maxHitpoints}`);
  console.log(`Str:\t${this.strength}`);
  console.log(`State:${this.bored ? "\tBored" : ""}${this.hungry ? "\tHungry" : ""}${this.sleepy ? "\tSleepy" : ""}${this.hitpoints <= 0 ? "\tDefeated" : ""}\n`);
};

module.exports = DigitalPet;