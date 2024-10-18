//making a function only accepts literals and specific values like "asc", "desc"
type Order = "asc" | "desc";
function sortArray(order: Order) : void{
    if(order === "asc"){
        console.log("ascending");
         let numbers : number[] = [2,5,3,7,1];
        console.log(numbers.sort());
    }else{
        console.log("descending");
        let numbers : number[] = [2,5,3,7,1];
        console.log(numbers.sort().reverse());
    }

}

sortArray("asc");
sortArray("desc");