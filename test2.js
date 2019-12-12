function quadrado(valor) {
    return valor * valor;
}

const result1 = quadrado(20);
const result2 = quadrado(30);
console.log(result1,result2);

const [res2, res1] = [20,30].map((x) => quadrado(x));
console.log(res1,res2)

const y = {
    loga: console.log,
    naoLoga: 3,
}

console.log(y['loga']('oi'))