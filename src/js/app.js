export default class Character {
  constructor(name, type) {
    const arr = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
      if (arr.indexOf(type) === -1) {
        throw new Error('error');
      }
      this.name = name;
      this.type = type;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

   get attack() {
     function getBaseLog(x, y) {
       return Math.log(y) / Math.log(x);
     }
     if (this.stoned === true) {
       this._attack -= (((this._attack / 100) * (10 * (this.distance - 1))) + getBaseLog(2, this.distance) * 5);
     }
     else {
       this._attack -= ((this._attack / 100) * (10 * (this.distance - 1)));
     }
       return Math.round(this._attack);
   }

   set attack(value) {
     this._attack = value;
   }
}

export class Magician extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
    this.distance = 2;
  }
}

export class Daemon extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 40;
    this.distance = 4;
  }
}