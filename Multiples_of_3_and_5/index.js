let num = 0;
let soma = 0; 

while (num < 1000){
    if (Number.isInteger(num/3) || Number.isInteger(num/5)){
    soma += num;
    }
    num++;
}
console.log(soma)