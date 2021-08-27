// import functions
import { answerArray } from './answers.js';

// reference needed DOM elements
const button = document.getElementById('submit-button');
const answer = document.getElementById('answer-section');

function randomNumber(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
}
// set event listeners 
    // get user input(s)
button.addEventListener('click', () => {
    const randomIndex = randomNumber(answerArray.length - 1);
    answer.textContent = answerArray[randomIndex];
});
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)
