#!/usr/bin/env node
import readLineSync from 'readline-sync';

console.log('Answer "yes" if the number is even, otherwise answer "no".');
const evenOrNot = () => {
  let result = '';
  const randomNumber = Math.ceil(Math.random() * 100);
  if (randomNumber % 2 === 0) {
    result = `${result}yes`;
  }
  if (randomNumber % 2 !== 0) {
    result = `${result}no`;
  }
  console.log(`Question: ${randomNumber}`);
  const answer = readLineSync.question('Your answer:');
  if (randomNumber % 2 === 0 && answer === 'yes') {
    return console.log('Correct!');
  }
  if (randomNumber % 2 !== 0 && answer === 'no') {
    return console.log('Correct!');
  }

  if (randomNumber % 2 === 0 && answer === 'no') {
    return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
  }
  if (randomNumber % 2 !== 0 && answer === 'yes') {
    return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
  } 
  return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
};

export default evenOrNot;
