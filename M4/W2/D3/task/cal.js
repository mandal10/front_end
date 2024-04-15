function add(num1, num2) {
    let a = `Addition is ${+num1 + +num2}`;
    return a
}

function sub(num1, num2) {
    let a = `subtraction is ${+num1 - +num2}`;
    return a
}

function divide(num1, num2) {
    let a = `divide is ${+num1 * +num2}`;
    return a
}

function multiply(num1, num2) {
    let a = `multiply is ${+num1 / +num2}`;
    return a
}

export { add, sub, divide, multiply }

