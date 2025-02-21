interface cats {
    age : number;
    breed : string;
}
interface usuario {
 id: number;
 name : string;
 email : String;

}
interface props {
    a?: string;
    b?: string;

}
interface Todo {
    title : string,
    description : string
    completed : boolean
}
type Todopreview = Pick<Todo, "title" | "completed">; //pick only title and completed properties
let todo : Todopreview = {
    title : "Clean room",
    completed : false
}


const obj : props = {
    a : "a"
}
const obj2 : Required<props> = { //all properties are required
    a : "a",
    b : "b"

}
type catName = "miffy" | "boris" | "mordred";
let  cats : Record<catName, cats> = { //create a record type with the catName as key and cats as value
    miffy : {age : 10, breed : "Persian"},
    boris : {age : 5, breed : "Maain"},
    mordred : {age : 16, breed : "Siamese"}

}
type usuarioPartila = Partial<usuario>; // all properties are optional
type usuariosinEmail = Omit<usuario, "email">; // omit email property
type awaitedtype = Awaited<Promise<String>>; // await a promise type 
let pokeAPI : string = "https://pokeapi.co/api/v2/pokemon";
let promise : Promise<String> = new Promise((resolve, reject) => {
    resolve(pokeAPI);
})

let user : usuario = {
    id : 1,
    name : "John",
    email : "jhon@gmail.com"
}
let userWithoutEmail : usuariosinEmail = {
    id : 1,
    name : "John"

}
let userPartial : usuarioPartila= {
    
    name : "John"
}
console.log(userWithoutEmail);
console.log(userPartial);
console.log(promise ) 
console.log(cats);
console.log(todo);