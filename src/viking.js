// Soldier
class Soldier {
  constructor(healthParam, strengthParam) {
    this.health = healthParam;
    this.strength = strengthParam;
  }
    attack () {
    return this.strength;
    }

    receiveDamage (damageParam){
    this.health = this.health - damageParam;
    }
}

// Viking
class Viking  extends Soldier {
  constructor(nameParam, healthParam, strengthParam) {
    super(healthParam, strengthParam);
    this.name = nameParam;
  }

  receiveDamage (damageParam){
    this.health = this.health - damageParam;

    if(this.health > 0){
    return `${this.name} has received ${damageParam} points of damage`;
    }else{
    return `${this.name} has died in act of combat`;
  }
}

battleCry(){
  return "Odin Owns You All!";
}

}

// Saxon
class Saxon extends Soldier{
 constructor(healthParam, strengthParam) {
   super(healthParam, strengthParam);
 }

receiveDamage (damageParam){
  this.health = this.health - damageParam;

  if(this.health > 0){
    return `A Saxon has received ${damageParam} points of damage`;
    }else{
    return "A Saxon has died in combat";
  }
}
}

// War
class War{}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
