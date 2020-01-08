let objetivo = false;
let contador = 1;
const limiteDivisores = 500;

function verificaSeExiste500Divisores(numero) {
    let divisores = 0;
    for (let index = numero; index > 1; index--) {
        if (numero % index === 0) {
            divisores++;
        }
    }
    return divisores >= limiteDivisores;
}

while (objetivo === false) {
    let triangular = contador * (contador + 1) / 2;
    if (verificaSeExiste500Divisores(triangular)) {
        objetivo = true;
        console.log(`Cheguei ao objetivo, o número ${triangular} é o primeiro triagular a ter ${limiteDivisores} divisores.`);
    }
    contador++;
}