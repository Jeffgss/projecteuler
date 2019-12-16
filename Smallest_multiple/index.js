let value = 1;
let condi = true;
const quant = 10;

while (condi) {
    let cont = 0;
    for (let n1 = 1; n1 <= quant; n1++) {
        if (value % n1 === 0) {
            cont++;
        }
    }
    if (cont === quant) {
        condi = false;
        console.log(value);
    }
    value++
}