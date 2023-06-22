const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

const expectedResult = 'Stephen King';
const authorBornIn1947 = () => {
  return books.find(books => books.author.birthYear === 1947).author.name;
};
console.log(authorBornIn1947());

const expectedResult2 = 'Duna';
const smallerName = () => {
  let nameBook;
  // escreva aqui o seu código
  books.forEach((book) => {
    if(!nameBook || book.name.length < nameBook.length){
      nameBook = book.name
    }
  })
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
console.log(smallerName());

const expectedResult3 = false;

const everyoneWasBornOnSecXX = () => {
  // escreva seu código aqui
  return books.every((book) => (book.author.birthYear >= 1901 && book.author.birthYear <= 2000))
};

console.log(everyoneWasBornOnSecXX());

const expectedResult4 = true;

const someBookWasReleaseOnThe80s = () => {
  // escreva seu código aqui
  return books.some((book) => (book.releaseYear = 1980))
};
console.log(someBookWasReleaseOnThe80s());

const expectedResul5 = false;

const authorUnique = () => {
  return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
}
console.log(authorUnique());

