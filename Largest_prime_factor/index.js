let valor = 600851475143;
let x = 0;

for (let index = 2; index < valor; index++) {
    console.log(`${index}/${valor}`)
    if(valor % index  === 0) {
        valor = valor/ index;
        x = x < index ? index : x;
    }    
}
console.log(x);