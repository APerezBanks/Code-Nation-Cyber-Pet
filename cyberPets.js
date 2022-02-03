// Cyber pet time!
// User selects the kind of animal they’d like (dog, cat, rabbit)
//  and you have to play with it, feed it, give it drinks etc.
// There should be consequences across the board
// – if you don’t play, it gets bored, if you do, it’s happy, 
// but gets thirsty, that kind of thing.
 
// class Animal {
//     constructor (name, hunger, thirst, play){
//         this._name = name;
//         this._hunger = hunger;
//         this._thirst = thirst;
//         this._play = play;
//     }
//     get name() {
//                 return this._name;
//             }
//             get hunger(){
//                 return this._hunger;
//             }
//             get thirst(){
//                 return this._thirst;
//             }
//             eat() {
//                 this._hunger--;
//             }
//             drink(){
//                 this._thirst--;
//             }
//             playtime() {
//         if (this_play > 50 ){
//             console.log(`${this._name} is having a lot of fun `);
//         } else {
//         console.log(`ohhh nooo ${this._name} is very bored,try to play with him.`);
//         }
//     }
// }

// const dog = new Animal("Toffee",80,50, 67);
// console.log(dog)

// class Animal {
//     constructor(name) {
//         this._name = name;
//         this._hunger = 100;
//         this._thirst = 100;
//     }
//     get name() {
//         return this._name;
//     }
//     get hunger(){
//         return this._hunger;
//     }
//     get thirst(){
//         return this._thirst;
//     }
//     eat() {
//         this._hunger--;
//     }
//     drink(){
//         this._thirst--;
//     }
// }

// class Bunny extends Animal {

//     constructor(name, lovesCarrot, favFood){
//     super(name);
//     this._lovesCarrot = lovesCarrot; 
//     this._favFood = favFood;
//     }
//     get lovesCarrots(){
//         return this._lovesCarrot; }
//     get favFood(){
//         return this._favFood;
// } }

// const rosie = new Bunny("Rosie",true,["basil", "rockets", "broccoli"]);


// console.log(rosie)

// class Rat extends Animal {

//     constructor(name, radiation){
//     super(name);
//     this._radiationLevel = radiation; 
//     this._littleRats =  0;
//     }
//     get radiation(){
//         return this._radiantLevel; }
//     get littleRats(){
//         return this._littleRats;
//     }
//     increaseRat(){
//         this.littleRats++;
//     }

// }

// const splinter = new Rat("Splinter","max level",0) 

// console.log(splinter)






// class Enemy {
//     constructor(name, health) {
//         this._name = name;
//         this._health = health;
//         this._weapons = ["sword", "bow"];
//     }
//     get name() {
//         return this._name;
//     }
//     get health() {
//         return this._health;
//     }
//     get weapons() {
//         return this._weapons;
//     }
//     reduceHealth(amount) {
//         return this._health -= amount;
//     }
// }

// const enemy1 = new Enemy("Jordan", 1000);
// const enemy2 = new Enemy("Yusuf", 10);

// console.log(enemy1.health);
// console.log(enemy1.reduceHealth(100));
// console.log(enemy2.health);
// console.log(enemy1.reduceHealth(100));
// console.log(enemy2.health);
// console.log(enemy1.reduceHealth(100));
// console.log(enemy2.health);
// console.log(enemy2.reduceHealth(10));


// class Human {
//     constructor (name, energy, experience, money, social){
//     this._name = name;
//     this._energy = energy;
//     this._experience = experience;
//     this._money = money;
//     this._social = social;
// }
//     get name() {
//         return this._name;
//     }
//     get energy(){
//         return this._energy;
//     }
//     get experience(){
//         return this._experience;
//     }
//     get money() {
//         return this._money;
//     }

//     get social(){
//         return this._social;
//     }

// }
    
// const humanoide = new Human ("Robert", 50, 60, 23, 10)

//  console.log(humanoide)


//  class BabyBoomer extends Human {
//     constructor()

//  }


//  class GenX extends Human {}

//  class Xennial extends Human {}

//  class Millenial extends Human {}

//  class Zgen extends Human {}


// class Animal {
//     constructor(){
//         this._health = 1000;
//     }
//     action(){
//         console.log("I did something");
//     }
//     get health(){
//         return this._health;
//     }
// } 

// class Bird extends Animal {
//     constructor(){
//         super();
//         this._health = 1050;
//         this._favouriteFood = ["Seeds"];
//     }
//     action(){
//         console.log("I flapped my wings")
//     }
// } 

// class Dog extends Animal {
//     constructor(){
//         super();
//         this._favouriteFood = ["Dog food", "Postman's trousers"];
//     }
//     action(){
//         super.action();
//         console.log("I barked");
//     }
// } 

// let bird = new Bird(); 
// let dog = new Dog(); 

// console.log(bird.health); // Bird's health will be 1050 
// console.log(dog.health); // Dog's health will be 1000

// bird.action(); // Bird's action() will result "I flapped my wings"
// dog.action(); // Dog's action() will result "I did something" and "I barked"