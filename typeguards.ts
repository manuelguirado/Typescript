//using type guards to check if a value is a number, string or boolean
function  isNumber ( value: unknown): value is number {
    return typeof value === 'number';
    console.log("is number");
}
function isString ( value: unknown): value is string {
    return typeof value === 'string';
}
function isBoolean ( value: unknown): value is boolean {
    return typeof value === 'boolean';
}
let value : unknown = 1;
let value2 : unknown = "1";
let value3 : unknown = true;

console.log(isNumber(value));
console.log(isString(value2));
console.log(isBoolean(value3))