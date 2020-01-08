n1 = 3;
n2 = [0,1,1];
n3 = 0;
while(n3 < 10 ){
    n22 = n1 - 2;
    n11 = n1 - 1;
    n2.push(n2[n11] + n2[n22]);
    n3++;
    n1++;
}
console.log(n2);
const soma = n2.reduce((acc, valueAtual ) => {
    if( valueAtual % 2 === 0) return acc + valueAtual;
    return acc;
},0)
console.log(soma)