function executor(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        let result = originalMethod.apply(this, args);
        return result * 2;

    }
    return descriptor;
}

class Calculator {
    @executor
    add(a: number, b: number) {
        return a + b;
    }
}
let calc = new Calculator();
let result = calc.add(2, 3);
console.log(result);