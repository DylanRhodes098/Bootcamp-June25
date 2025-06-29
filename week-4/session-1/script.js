let number = parseFloat(prompt("number: "));
let number2 = parseFloat(prompt("number: "));
let operator = prompt ("operator: ");

function calculator (a, b) {
    if (operator === "*") {
        return a * b 
    }
    else if (operator === "+") {
        return a + b
    }
    else if (operator === "-") {
        return a - b;
    }

    else if (operator === "/") {
        return a / b;
    }

    else {
        console.log("error");
    }
}

if (typeof )

console.log (calculator(number, number2, operator));