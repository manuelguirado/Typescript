//create a function to add an article
function addArticle(nombre: string, precio: number) : void{
    let inventario = new Map<string, number>();
    inventario.set(nombre, precio);
    for (const [key, value] of inventario) {
        console.log(key, value);
    }
}
//create a function to delete an article
function deleteArticle(nombre: string) : void{
    let inventario = new Map<string, number>();
    inventario.delete(nombre);
    for (const [key, value] of inventario) {
        console.log(key, value);
    }
}
//create a function to update an article
function updateArticle(nombre: string, precio: number) : void{
    let inventario = new Map<string, number>();
    inventario.set(nombre,precio);
    for (const [key, value] of inventario) {
        console.log(key, value);
    }
}
//create a function to search an article
function searchArticle(nombre: string) : void{
    let inventario = new Map<string, number>();
    inventario.get(nombre);
    for (const [key, value] of inventario) {
        console.log(key, value);
    }
}
//Create a inventory
let inventory = new Map<string, number>();
//add articules
addArticle("shoes", 100);
addArticle("sunglasses", 200);
addArticle("t-shirt", 300);
addArticle("jacket", 400);
//delete articles
deleteArticle("shoes");
//update articles
updateArticle("sunglasses", 500);
//search articles
searchArticle("sunglasses");
