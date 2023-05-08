// Requisito 1 - Crie a função verificaPalindromo

function verificaPalindromo(palavra) {
  let inverse = palavra.split('').reverse().join('');
  return palavra === inverse;
} console.log(verificaPalindromo('arara'));
console.log(verificaPalindromo('desenvolvimento'));

// Requisito 2 - Crie a função indiceDoMaior

function indiceDoMaior(array) {
  let maior = array[0];
  let indiceMaior = 0;
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > maior) {
      maior = array[index];
      indiceMaior = index;
    }
  }
  return indiceMaior;
}

console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));
console.log(indiceDoMaior([9, 1, 3, 5, 7]));

// Requisito 3 - Crie a função indiceDoMenor

function indiceDoMenor(array) {
  let menor = array[0];
  let indiceMenor = 0;
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] < menor) {
      menor = array[index];
      indiceMenor = index;
    }
  }
  return indiceMenor;
}

console.log(indiceDoMenor([2, 3, 6, 7, 10, 1]));
console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3]));

// Requisito 4 - Crie a função maiorPalavra

function maiorPalavra(array) {
  let maior = '';
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > maior.length) {
      maior = array[index];
    }
  }
  return maior;
}

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
console.log(maiorPalavra(['JavaScript', 'HTML', 'CSS', 'GitHub', 'Unix']));

// Requisito 5 - Crie a função maisRepetido

function contarElementos(array, elemento) {
  let contador = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === elemento) {
      contador += 1;
    }
  }
  return contador;
}

function maisRepetido(array) {
  let contador = 0;
  let numeroMaisRepetido;

  for (let index = 0; index < array.length; index += 1) {
    let contagem = contarElementos(array, array[index]);
    if (contagem > contador) {
      contador = contagem;
      numeroMaisRepetido = array[index];
    }
  }
  return numeroMaisRepetido;
}
console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));
console.log(maisRepetido([2, 3, -2, 3, -2, 2, 3]));

// Requisito 6 - Crie a função somatorio

function somatorio(N) {
  let resultado = 0;
  if (N < 0) {
    return 'ERRO';
  }
  for (let index = 0; index <= N; index += 1) {
    resultado += index;
  }
  return resultado;
}
console.log(somatorio(5));
console.log(somatorio(1));
console.log(somatorio(-3));

// Requisito 7 - Crie a função verificaFimPalavra

const verificaFimPalavra = (palavra1, palavra2) => {
  if (palavra1.length < palavra2.length) {
    return false;
  }
  const inicio = palavra1.length - palavra2.length;

  for (let index = 0; index < palavra2.length; index += 1) {
    if (palavra1[inicio + index] !== palavra2[index]) {
      return false;
    }
  }
  return true;
};

console.log(verificaFimPalavra('trybe', 'be'));
console.log(verificaFimPalavra('joaofernando', 'fernan'));

// Não modifique essas linhas
module.exports = {
  verificaPalindromo: typeof verificaPalindromo === 'function' ? verificaPalindromo : (() => {}),
  indiceDoMaior: typeof indiceDoMaior === 'function' ? indiceDoMaior : (() => {}),
  indiceDoMenor: typeof indiceDoMenor === 'function' ? indiceDoMenor : (() => {}),
  maiorPalavra: typeof maiorPalavra === 'function' ? maiorPalavra : (() => {}),
  maisRepetido: typeof maisRepetido === 'function' ? maisRepetido : (() => {}),
  somatorio: typeof somatorio === 'function' ? somatorio : (() => {}),
  verificaFimPalavra: typeof verificaFimPalavra === 'function' ? verificaFimPalavra : (() => {}),
};
