import readLineSync from 'readline-sync';
const userNameArray = [];
function greeting() {
// eslint-disable-next-line no-console
  console.log('Welcome to the Brain Games!');
  const userName = readLineSync.question('May I have your name?');
  userNameArray.push(userName);
  // eslint-disable-next-line no-console
  console.log(`Hello, ${userName}!`);
};
export { greeting, userNameArray };
