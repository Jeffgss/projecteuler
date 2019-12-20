const primeNumbers = [];
let num = 2;
let result = 0;
let sumPrime = 0;
let total = 2000001;

while (num < total) {
    let primeFlag = true;
    for (let count = 2; count < num; count++) {
        if (num % count === 0) {
            primeFlag = false;
            break;

        }
    }
    if (primeFlag) {
        sumPrime += num;
    }
    num++;
}
console.log(sumPrime);