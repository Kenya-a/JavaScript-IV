/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObject{
    constructor(attr){
    this.createdAt = attr.createdAt;
    this.name = attr.name;
    this.dimensions = attr.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game.`;
  }
}
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  class CharacterStats extends GameObject{
  constructor(health){
    super (health);
    this.healthPoints = health.healthPoints;  
  }
  
//   CharacterStats.prototype = Object.create(GameObject.prototype)
  
  takeDamage() {
    return `${this.name} took damage.`
    
  }
}
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
   class Humanoid extends CharacterStats{
    constructor (human){
     super(human)
     this.team =  human.team;
     this.weapons = human.weapons;
     this.language = human.language;
     this.maybeHuman = human.maybeHuman
   }

    // Humanoid.prototype = Object.create(CharacterStats.prototype)
  
   greet(){
     return `${this.name} offers a greeting in ${this.language}`
   }
}
//    function Villain(alien){
//      Humanoid.call(this, alien)
//      this.army = alien.army
//      this.power = alien.power
//      this.dialect = alien.dialect
//      this.definitelyAlien = alien.definitelyAlien
//    }
//       Villain.prototype = Object.create(Humanoid.prototype)
  
//       Villain.prototype.annihilate = function(){
//         return `${this.power} is activated`
    //   }
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
  // //🤷‍♂️Character 1
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
    // //🤦‍♀️Character 2
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
    // //🤷‍♀️Character 3
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
  
  
//     //Character 4 👽
//   const goblin = new Humanoid({
//     createdAt: new Date(),
//     dimensions: {
//       length: 3,
//       width: 2,
//       height: 2,
//     },
//     healthPoints: 15,
//     name: 'STibm',
//     team: 'AlienG',
//     weapons: [
//       'Power of Villian',
//     ],
//     language: 'hraki',
//   });
  
  
  
//   //Character 5 👾
//   const bill = new Humanoid({
//     createdAt: new Date(),
//     dimensions: {
//       length: 3,
//       width: 2,
//       height: 2,
//     },
//     healthPoints: 15,
//     name: 'STibm',
//     team: 'AlienG',
//     weapons: [
//       'Power of Villian',
//     ],
//     language: 'hraki',
//   });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
