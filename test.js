let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function tabuadaDe2(item) {
    return item *2 ; 
}
 
numeros.forEach(tabuadaDe2) 
const maps = numeros.map(tabuadaDe2) 
console.log(maps)
const soma = numeros.reduce(( acc, num) => {
    return acc += num;
}) 
console.log(soma)