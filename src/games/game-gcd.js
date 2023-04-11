#!/usr/bin/env node
import readLineSync from 'readline-sync';
import { greeting, userNameArray } from '../cli.js';
import randomNumber from '../numberRandomiser.js';

function getGcd() {
  greeting();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    let a = randomNumber();
    let b = randomNumber();
    let result = '';
    console.log(`Question: ${a} ${b}`);
    while (a != 0 && b != 0) {
      if (a > b) {
        a %= b;
      } else { b %= a; }
    }
    const gcd = a + b;
    result = `${result}${gcd}`;
    // console.log(result);

    const answer = readLineSync.question('Your answer:');
    if (answer === result) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.`);
      console.log(`Let's try again ${userNameArray[0]}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userNameArray[0]}!`);
}

export default getGcd;
