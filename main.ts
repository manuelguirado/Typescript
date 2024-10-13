
function addition (number1: number, number2: number): number {
    return number1 + number2;

}
function subtraction (number1: number, number2: number): number {
    return number1 - number2;
}
function multiplication (number1: number, number2: number): number {
    return number1 * number2;
}
function division (number1: number, number2: number): number {
    return number1 / number2;
}
console.log("1. Addition \n 2. Subtraction \n 3. Multiplication \n 4. Division \n 5. Exit");



    let choice  =  process.argv[2];
    switch (choice) {
        case "1":
            let number1 = parseInt(process.argv[3]);
            let number2 = parseInt(process.argv[4]);
            console.log(addition(number1, number2));
            break;
        case "2":
            let number3 = parseInt(process.argv[3]);
            let number4 = parseInt(process.argv[4]);
            console.log(subtraction(number3, number4));
            break;
        case "3":
            let number5 = parseInt(process.argv[3]);
            let number6 = parseInt(process.argv[4]);
            console.log(multiplication(number5, number6));
            break;
        case "4":
            let number7 = parseInt(process.argv[3]);
            let number8 = parseInt(process.argv[4]);
            console.log(division(number7, number8));
            break;
        case "5":
        
            break;
        default:
            console.log("Invalid choice");
            break;


    }

