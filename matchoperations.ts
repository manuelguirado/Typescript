//creating a namespace of math operations
export namespace matchoperations{
    export function addition(number1: number, number2: number): number {
        return number1 + number2;
    }
    export function subtraction(number1: number, number2: number): number {
        return number1 - number2;
    }
    export function multiplication(number1: number, number2: number): number {
        return number1 * number2;
    }
    export function division(number1: number, number2: number): number {
        return number1 / number2;
    }

}
const resultado =  matchoperations.addition(2, 3);
console.log(resultado)