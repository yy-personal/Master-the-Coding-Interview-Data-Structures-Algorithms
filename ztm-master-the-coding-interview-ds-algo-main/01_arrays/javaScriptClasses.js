class Player{
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi this is my name ${this.name} and i am a ${this.type}`)
    }
}
class Wizard extends Player{
    constructor(name, type){
        super(name, type);
        // use super to have the 'this' to be used here from Player
    }
    play(){
        console.log(`I am a ${this.type}`);
    }
}
const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard("Shawn", "fire");
wizard1.introduce()
wizard1.play()
