// Q68 - Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.

function multiplyDecimals(num1: number, num2: number){
    let result = (num1 * num2).toFixed(2);
     parseFloat(result);

    return result;
}

console.log(multiplyDecimals(0.1, 0.2)); // 0.02