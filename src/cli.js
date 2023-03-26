import readLineSync from 'readline-sync';

const greeting = () => {
  const userName = readLineSync.question('May I have your name?');
  // eslint-disable-next-line no-console
  console.log(`Hello, ${userName}!`);
};
export default greeting;
