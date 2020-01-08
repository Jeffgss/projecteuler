function pow(x, pos = 2) {
    if(pos === 1) return x
    return x * pow(x, pos -1)
}

console.log(pow(2, 11))


function fibonacci(n) {
    n1 = 3;
    n2 = [0,1,1];
    n3 = 3;
    while(n3 < n ){
        n22 = n1 - 2;
        n11 = n1 - 1;
        n2.push(n2[n11] + n2[n22]);
        n3++;
        n1++;
    }
    console.log(n2)
    return n2;
}

// function fibonacci(n){
//     let n1 = 0, n2 =1;
//     for (let i = 2; i <= n; i++) {
//         let f = n1;
//         n1 = n2;
//         n2 += f;
//     }
//     console.log(n2)
//     return n2;
// }
console.log(fibonacci(5))