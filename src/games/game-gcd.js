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
  console.log(`Question: ${a} ${b}`);
  while ( a != 0 && b != 0 ) {
  if (a > b) {
    a %= b;
  } else { b %= a; }
}
let c = a + b;
console.log(c)
const answer = readLineSync.question('Your answer:');
}
}

export default getGcd;
