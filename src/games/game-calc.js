#!/usr/bin/env node
import readLineSync from 'readline-sync';
import { greeting, userNameArray } from '../cli.js';

const calculateExpression = () => {
  greeting();

  console.log('What is the result of the expression?');
};

export default calculateExpression;
