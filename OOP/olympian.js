class Olympian{
    //constructor -> the thing to do upon creation of a new olympian
    constructor(nameInput,countryInput,heightInput){
        //we can define the properties that every olympian will have upon creation here inside the constructor
        this.name = nameInput;
        this.country = countryInput;
        this.height = heightInput;
        this.energyLevel = 100;
    }

    competeInEvent(){
        console.log("competing in event...")
        this.energyLevel -= 5;
        return this;//returning theis allows us to chain the method calls.
    }

    takeIceBath(){
        console.log("Taking ice bath to fully restore energy!")
        this.energyLevel = 100;
        return this;
    }

    displayInfo(){
        let info = `Hi my name is ${this.name}, I am from ${this.country}. I am ${this.height} inches tall. My energy level is currently at ${thisenergyLevel}`;
        console.log(info);
    }
}


class Swimmer extends Olympian{
    constructor(nameInput,countryInput,heightInput){
        super(nameInput,countryInput,heightInput) //super means do what the parent contructo is doing. This will allow the constructor of the swimmer class to reference the constructor of the parent (olympian) class to set the name, country, and height just like the parent class did. We need this when we want to add our own unique attributes to the swimmer class (like swimSpeed);
        this.swimSpeed = 99;
    }
}

let Phelps = new Swimmer("Michael Phels", "USA", 72)
console.log(Phelps)

//outside of the class, we can create INSTANCES of the Olympian class

let o1 = new Olympian("Luka Doncic", "Slovenia", 79);
let o2 = new Olympian("Michael Phelps", "USA", 72);
let o3 = new Olympian("Simone Biles", "USA", 60);

console.log(o1)
console.log(o2)
console.log(o3)


/*
python:
class Olympian:
    def __init__(self, nameInput):
        self.name = nameInput;
        self.country = "USA"


*/
