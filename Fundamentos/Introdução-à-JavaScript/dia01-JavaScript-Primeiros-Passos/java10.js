let custo = 140;
let valor = 300;

if (custo >= 0 && valor >= 0){
    let custoTotal = custo * 1.2;
    let lucroTotal = (valor - custoTotal) * 1000;
    console.log(lucroTotal)
}
else {
    console.log('Erro')
}