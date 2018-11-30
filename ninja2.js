function Ninja(name) {
    this.name = name;
    this.health = 100;
    const speed = 3;
    const strength = 3;
    this.sayName = function () {
        console.log ("My ninja name is " + this.name + "!");
    }
    this.showStats = function () {
        console.log ("Name : " + this.name + ", Health : " + this.health + ", Speed : " + speed + ", Strength : " + strength);
    }
    this.drinkSake = function () {
        this.health += 10;
    }
}

Ninja.prototype.punch = function (obj) {
    if (obj instanceof Ninja){
        this.health -= 5;
        console.log(this.name + " was punched by " + obj.name + " and lost 5 health!");
    }
    else {
        console.log("this app only accepts Instances of the Ninja class");
    }
}

Ninja.prototype.kick = function (obj) {
    if (obj instanceof Ninja) {
        this.health -= 15;
        console.log(this.name + " was kicked by " + obj.name + " and lost 15 Health!");
    }
    else {
        console.log("This app only accepts Instances of the Ninja class");
    }
}

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");

redNinja.showStats();
blueNinja.showStats();
redNinja.punch(blueNinja);
redNinja.showStats();
blueNinja.showStats();
blueNinja.kick(redNinja);
redNinja.showStats();
blueNinja.showStats();
redNinja.punch(1);
blueNinja.kick();
redNinja.showStats();
blueNinja.showStats();

//"Name : Bill Gates, Health : 100, Speed : 3, Strength : 3"
//"Name : Goemon, Health : 100, Speed : 3, Strength : 3"
//"Bill Gates was punched by Goemon and lost 5 health!"
//"Name : Bill Gates, Health : 95, Speed : 3, Strength : 3"
//"Name : Goemon, Health : 100, Speed : 3, Strength : 3"
//"Goemon was kicked by Bill Gates and lost 15 Health!"
//"Name : Bill Gates, Health : 95, Speed : 3, Strength : 3"
//"Name : Goemon, Health : 85, Speed : 3, Strength : 3"
//"This method only accept Instances of the Ninja class"
//"This method only accept Instances of the Ninja class"
//"Name : Bill Gates, Health : 95, Speed : 3, Strength : 3"
//"Name : Goemon, Health : 85, Speed : 3, Strength : 3"