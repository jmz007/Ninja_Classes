// Part 1
class Ninja {
    constructor (name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(this.name);
    }
    showStats() {
        console.log("Health : " + this.health + ", Speed : " + this.speed + ", Strength : " + this.strength);
    }
    drinkSake() {
        this.health += 10;
    }
}
// Part 2
class Sensei extends Ninja {
    constructor (name) {
        super(name);
        this.health += 100;
        this.speed += 7;
        this.strength += 7;
        this.wisdom = 10;
    }
    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months");
    }
}
// example output
const superSensei = new Sensei("Master Splinter");
superSensei.showStats();
superSensei.speakWisdom();
superSensei.showStats();

// "Health : 200, Speed : 10, Strength : 10"
// "What one programmer can do in one month, two programmers can do in two months"
// "Health : 210, Speed : 10, Strength : 10"