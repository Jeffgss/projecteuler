let value = 0;
for (let n1 = 10; n1 < 100; n1++) {
    for (let n2 = 10; n2 < 100; n2++) {
        const mult = n1 * n2;
        const multiInverse = Number(`${mult}`.split('').reverse().join('')) 
        if(mult === multiInverse) {
            value = value < mult ? mult : value;
        }
        
    }
    
}
console.log(value)
