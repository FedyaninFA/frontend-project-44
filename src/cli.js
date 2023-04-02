import readLineSync from 'readline-sync';

function greeting() {
// eslint-disable-next-line no-console
  console.log('Welcome to the Brain Games!');
  const userName = readLineSync.question('May I have your name?');
  // eslint-disable-next-line no-console
  console.log(`Hello, ${userName}!`);
};
export default greeting;
