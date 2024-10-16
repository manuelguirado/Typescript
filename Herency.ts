import { json } from "stream/consumers";

interface employee{
    id:number;
    name:string;
    salary:number;
    city:string;
}
class softwareEngineer implements employee{
    id:number;
    name:string;
    salary:number;
    city:string;
    position:string;
    constructor(id:number, name:string, salary:number, city:string, position:string){
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.city = city;
        this.position = position;
    }
}
class manager implements employee{
    id:number;
    name:string;
    salary:number;
    city:string;
    constructor(id:number, name:string, salary:number, city:string){
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.city = city;
    }
}
let manuel = new softwareEngineer(1, "Manuel", 1000, "Cordoba", "Software Engineer");
let elena = new manager(2, "Elena", 2000, "Cordoba");
console.log(manuel)
console.log(elena)  