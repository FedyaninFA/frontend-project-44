#!/usr/bin/env node
import readLineSync from 'readline-sync';
import { greeting, userNameArray } from '../cli.js';
import randomNumber from '../numberRandomiser.js';

function primeOrNot(number) {
  let result = '';
  if (number < 2) {
    result = 'no';
    return result;
  }
  for (let x = 2; x < number; x += 1) {
    if (number % x === 0) {
      result = 'no';
      return result;
    }
  } result = 'yes';
  return result;
}

function isPrime() {
  greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = randomNumber();
    const rightAnswer = primeOrNot(number);
    console.log(`Question: ${number}`);
    const answer = readLineSync.question('Your answer:');

    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${userNameArray[0]}!`);
      return;
    }
  } console.log(`Congratulations, ${userNameArray[0]}!`);
}

export default isPrime;
