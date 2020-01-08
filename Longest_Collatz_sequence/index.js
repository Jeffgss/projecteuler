let biggerResult = [];
let num;
let resultCollatz = {};

for (let x = 1; x < 1000000; x++) {
    const result = collatz(x);
    biggerResult = biggestValue(biggerResult, result)
    num = onum(num, x, result);
    resultCollatz = {
        initialValue: num,
        lengthValue: biggerResult.length
    }
}
console.log(resultCollatz);

function biggestValue(biggerResult, result) {
    let value = 0;
    if (biggerResult.length > result.length) {
        value = biggerResult;
    } else {
        value = result;
    }
    return value;
}

function onum(num, x, result) {
    let value = 0;
    if (biggerResult.length > result.length) {
        value = num;
    } else {
        value = x;
    }
    return value;
}

function collatz(y) {
    let result = [];
    while (true) {
        if (y % 2 === 0) {
            result.push(y);
            y = y / 2;
        } else {
            result.push(y);
            if (y === 1) {
                break;
            };
            y = 3 * y + 1;
        }
    }
    return result;
}