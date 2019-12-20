let a, b, c = 0;
let y = 2;

for (let a = 0; a < 1000 / 3; a++) {
    for (let b = 0; b < 1000 / 2; b++) {
        for (let c = 0; c < 1000; c++) {
            const pow = Math.pow(a, y) + Math.pow(b, y);
            const sum = a + b + c;

            if ((pow === Math.pow(c, y)) && (sum === 1000) && (a < b) && (b < c)) {
                console.log(`${a}² + ${b}² = ${c}² and ${a} + ${b} + ${c} = 1000`);

            };
        }
    }
}