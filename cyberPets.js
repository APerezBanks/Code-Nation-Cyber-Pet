// Cyber pet time!
// User selects the kind of animal they’d like (dog, cat, rabbit)
//  and you have to play with it, feed it, give it drinks etc.
// There should be consequences across the board
// – if you don’t play, it gets bored, if you do, it’s happy, 
// but gets thirsty, that kind of thing.
 

//attemp number 3409532442-023 

// user selects the kind of animal ? how ?????? we not covered that

// just going to create  one object called animal 

class Animal {
    constructor (name, animalType, hunger, thirst, energy) {
        this._name = name;
        this._animalType = animalType;
        this._hunger = hunger;
        this._thirst = thirst;
        this._fun = ["Sad","Bored","happy"];
        this._energy = energy;
    }
    get name() {
        return this._name;
    }
    get animaltype () {
        return this.animalType;
    }
    get hunger () {
        return this._hunger
    }
    get thirst () {
        return this.thirst;
    }
    get fun () {
        return this.energyFun()
    }
    get energy () {
        return this._energy;
    }

    reduceHunger(amount) {
        return this._hunger -= amount;
    }

    energyFun(){
            if (this._energy >= 60)
                    return this._fun[2]
          } else if {
                (this._energy < 60)
                    return this._fun[1]
        } else if { 
                (this._energy <= 30)
                    return this._fun[0]
    }
        
 }
    


class Dog extends Animal {
    constructor(name,animalType, hunger, thirst,fun, energy){
        super(name,animalType, hunger, thirst,fun, energy);
        this._treat = ["chiken","Doggy Snack","bone"];
    }
    get treat(){
       return this._treat;
     }

} 

const dog = new Animal("Sammy", "dog", 100, )
console.log(dog.reduceHunger(10));
console.log(Animal);

const sammy = new Dog ("d","doggy",12,23,"happy","10");
console.log(fun)
const sammy = new Dog ("d","doggy",12,23,"happy","50");
console.log(fun)
const sammy = new Dog ("d","doggy",12,23,"happy","70");
console.log(fun)