#!/usr/bin/env node
import readLineSync from 'readline-sync';
import { greeting, userNameArray } from '../cli.js';
import randomNumber from '../numberRandomiser.js';

function getProgression() {
  greeting();
  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    const progression = [];
    let result = '';
    const stepProgression = Math.ceil(Math.random() * 5) + 1;
    const initialValue = randomNumber();
    progression.push(initialValue);

    for (let j = 0; j < 9; j += 1) {
      const subValue = progression[j] + stepProgression;
      progression.push(subValue);
    }
    const numberToHide = Math.round(Math.random() * (progression.length - 1));
    const hidenNumber = progression[numberToHide];
    result = `${result}${hidenNumber}`;
    progression[numberToHide] = `..`;
    const linedProgression = progression.join(' ');

    console.log(`Question: ${linedProgression}`);
    const answer = readLineSync.question('Your answer:');

    if (answer === result) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.`);
      console.log(`Let's try again, ${userNameArray[0]}!`);
      return;
    }
  } console.log(`Congratulations, ${userNameArray[0]}!`);
}

export default getProgression;
