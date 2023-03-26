import readLineSync from 'readline-sync';
import greeting from './cli.js';

//const theTask = () => {
    //const answer = readLineSync.question(`'Answer "yes" if the number is even, otherwise answer "no".\nQuestion:' + ${nNumber}`);
    //console.log(`'Your answer:' ${answer}`);
//}

const generateNumber = () => {
    let number = Math.ceil(Math.random() * 100);
    console.log (number)
    
    
}  

export default generateNumber;




const evenOrNot = () => {
    const userGreeting = greeting();

}

