let peca = "cavalo"

switch(peca.toLowerCase()) {
    case "rei":
    console.log('Rei : Apenas uma casa para qualquer direção');
    break

    case "rainha":
    console.log('Rainha : Diagonal, Horizontal e Vertical');
    break

    case "bispo":
    console.log('Bispo : Apenas diagonais');
    break

    case "cavalo":
    console.log('Cavalo : Move-se em L, pulando sobre outras peças.');
    break

    case "torre":
    console.log('Torre : Horizontal e vertical')
    break

    case "peão":
    console.log ('Peão : Avança uma casa ou duas casas no primeiro movimento. Captura na diagonal.');
    break

    default:
    console.log('Erro peça inválida.')
}
