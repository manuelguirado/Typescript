//overload function to add two numbers or two strings
function overloadfunction(a: number, b: number): number;
function overloadfunction(a: string, b: string): string;
function overloadfunction(a: any, b: any): any {
    return a + b;
}
console.log(overloadfunction(1, 2));
console.log(overloadfunction("1", "2"));