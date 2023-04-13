#!/usr/bin/env node
import readLineSync from 'readline-sync';
import { greeting, userNameArray } from '../cli.js';

const evenOrNot = () => {
  greeting();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
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

    if ((randomNumber % 2 === 0 && answer === 'yes') || (randomNumber % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else if (randomNumber % 2 === 0 && answer === 'no') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${userNameArray[0]}!`);
      return;
    } else if (randomNumber % 2 !== 0 && answer === 'yes') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${userNameArray[0]}!`);
      return;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${userNameArray[0]}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userNameArray[0]}!`);
  return;
};

export default evenOrNot;
