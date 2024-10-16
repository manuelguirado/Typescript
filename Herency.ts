//creo la clase animal
interface animal {
    name: string;
    age : number;
}
//creo la clase perro que hereda de la clase animal
class dog implements animal{
    name : string;
    age : number;
    constructor(name : string, age : number){
        this.name = name;
        this.age = age;
    }
     makeSound() : void{
        console.log("guau guau");
        
    }



}
//creo la clase gato que hereda de la clase animal 
class cat implements animal{
    name : string;
    age : number;
    //creo el constructor de la clase
    constructor(name : string, age : number){
        this.name = name;
        this.age = age;
    }
    //creo un método de  hacer ruido
    makeSound() : void{
        console.log("meow meow");
        
    }
}
let luna = new dog("luna", 10);
let gata = new cat("gata", 5);
luna.makeSound();
gata.makeSound();
