class Ninja{
    constructor(name, health = 10){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(`My name is ${this.name}`);
        return this;
    }

    showStats(){
        console.log(`Name: ${this.name}`);
        console.log(`Health: ${this.health}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Strength: ${this.strength}`);
        return this;
    }

    drinkSake(){
        console.log(`${this.name} drank sake.`);
        this.health += 10;
        return this;
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();


class Sensei extends Ninja{
    constructor(name, health = 200){
        super(name, health = 200)
        this.wisdom = 10;
        this.speed = 10;
        this.strength = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}
const sensei1 = new Sensei("Ryu");
sensei1.speakWisdom();
sensei1.showStats();