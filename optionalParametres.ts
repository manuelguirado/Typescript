//create a function with optinal parameters and rest parametres
function concatenate(separator: string, prefix?: string ,...strings: string[]): string {
    const prefixString = prefix ? prefix + separator : "";
    return prefixString + strings.join(separator);
}
console.log(concatenate(" ", "Hello", "World"))
//? is a optional parameter