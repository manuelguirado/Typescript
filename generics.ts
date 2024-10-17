//create a function for filtering an array by type if is string or number or boolean etc
function filterbyType<T>(array: T[], type:string): T[] {
    //return a new array with only has the element that match with the type in the parameter
    return array.filter((item) =>typeof item === type) ;


}
//create a mixed array
let mixedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//call the function
const filteredArray = filterbyType(mixedArray, "string");
console.log(filteredArray)
