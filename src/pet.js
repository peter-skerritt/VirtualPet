function Pet(name) {
    this.name = name;
    this.age = 0;
    this.breed = 'Border Collie';
    this.hunger = 0;
    this.fitness = 10;
}

Pet.prototype.growUp = function() {
  if (!this.isAlive()) {
    throw new Error('Your pet is no longer alive :(');
  }
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
};

Pet.prototype.walk = function() {
  if (!this.isAlive()) {
    throw new Error('Your pet is no longer alive :(');
  }
  this.fitness += 4;
  if (this.fitness > 10) 
    this.fitness = 10; 
}


Pet.prototype.checkUp = function() {
  if (this.hunger <= 5 && this.fitness >= 3)
    return ('Im fine for now. Woof!')
  if (this.hunger >= 5 && this.fitness <= 3)
    return ('Im hungry and I need a walk!');
  if (this.hunger >= 5)
    return ('Im hungry!');
  if (this.fitness <= 3)
    return ('I need a walk!');
};

Pet.prototype.feed = function() {
  if (!this.isAlive()) {
    throw new Error('Your pet is no longer alive :(');
  }
  this.hunger -= 3;
  if (this.hunger < 0) {
    this.hunger = 0;
  }
};

Pet.prototype.isAlive = function() {
  return this.age < 30 && this.fitness > 0 && this.hunger < 10;
};


module.exports = Pet;
