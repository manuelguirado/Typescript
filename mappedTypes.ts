type readonly<T> = {
  readonly [P in keyof T]: T[P]; //readonly mapped type
}
interface user {
    id: number;
    name: string;
    email: string;
}
type usuarioSoloLectura = Readonly<user>; //all properties are readonly 

let usuario : user = {
    id : 1,
    name : "John",
    email : "jhon@gmail.com"
}
console.log(usuario);