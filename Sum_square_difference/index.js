let soma = 0;
let soma2 = 0;
let quant = 100;

for (let somaQuadrado = 1; somaQuadrado <= quant; somaQuadrado++) {
    let quadrado = somaQuadrado * somaQuadrado;
    soma = soma + quadrado;
    soma2 = soma2 + somaQuadrado;
    result = soma2 * soma2;
}

let dif = result - soma ;
console.log(dif);