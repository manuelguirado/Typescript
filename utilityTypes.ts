interface usuario {
 id: number;
 name : string;
 email : String;

}
type usuarioPartila = Partial<usuario>; // all properties are optional
type usuariosinEmail = Omit<usuario, "email">; // omit email property

let user : usuario = {
    id : 1,
    name : "John",
    email : "jhon@gmail.com"
}
let userWithoutEmail : usuariosinEmail = {
    id : 1,
    name : "John"

}
console.log(userWithoutEmail);
