#!/usr/bin/env node
import readLineSync from 'readline-sync';
import { greeting, userNameArray } from '../cli.js';
import randomNumber from '../numberRandomiser.js';

function getRandomOperator() {
  const symbolColl = ['-', '+', '*'];
  const randomSymbolNumber = Math.floor(Math.random() * symbolColl.length);
  const randomSymbol = symbolColl[randomSymbolNumber];
  return randomSymbol;
}

// eslint-disable-next-line consistent-return
const expression = (operator, firstOperand, secondOperand) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default: console.log('unexpected operator');
  }
};

function calculateExpression() {
  greeting();

  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const firstOperand = randomNumber();
    const secondOperand = randomNumber();
    const operator = getRandomOperator();
    let result = '';
    const calculateResult = expression(operator, firstOperand, secondOperand);
    result = `${result}${calculateResult}`;
    console.log(`Question: ${firstOperand} ${operator} ${secondOperand}`);
    const answer = readLineSync.question('Your answer:');
    if (answer === result) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}`);
      console.log(`Let's try again, ${userNameArray[0]}!`);
      return;   
    }
  }
  console.log(`Congratulations, ${userNameArray[0]}!`);
  return;
}

export default calculateExpression;
