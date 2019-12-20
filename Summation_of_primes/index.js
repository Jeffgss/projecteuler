const primeNumbers = [];
let num = 2;
let result = 0;

while (primeNumbers.length < 10) {
    let primeFlag = true;
    for (let count = 2; count < num; count++) {
        if(num % count === 0) {
            primeFlag = false;
            break;
            
        }
    }
    if(primeFlag) {
        primeNumbers.push(num);
    }
    num++;
}
console.log(primeNumbers);