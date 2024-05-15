// Question 117: Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.

function evaluate(expression: string) {
    switch (expression) {
        case '1':
            return 1;
        case '2':
            return 2;
        case '3':
            return 3;
        case '4':
            return 4;
        case '5':
            return 5;
        default:
            return 0;
    }
    return 0;
}

console.log(evaluate('1'));
