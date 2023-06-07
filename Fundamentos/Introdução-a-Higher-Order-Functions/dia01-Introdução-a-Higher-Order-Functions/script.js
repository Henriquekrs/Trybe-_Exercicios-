const employeeGenerator = (fullname) => {
  const email = fullname.toLowerCase().replace(' ', '_');
  return {fullname, email:`${email}@trybe.com`}
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'),// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const checarAposta = (myNumber, number) => myNumber === number;

const resultadoAposta = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Parabéns voçê ganhou' : 'Tente novamente!';
};

// console.log(resultadoAposta(2, checarAposta));

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verifyAnswers = (right_answers, student_answers) => {
  if (right_answers === student_answers) {
    return 1;
  } if (right_answers === 'N.A') {
    return 0;
  }
  return -0.5;
};

const verifyScore = (right_answers, student_answers, callback) => {
  let score = 0;
  for (let index = 0; index < right_answers.lenght; index += 1) {
    const actionReturn = callback(right_answers[index], student_answers[index]);
    score += actionReturn;
  }
  return `resultado final: ${score} pontos`;
};
 console.log(verifyScore(RIGHT_ANSWERS, STUDENT_ANSWERS, verifyAnswers));

