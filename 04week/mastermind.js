'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let correctLetterLocation = 0;
let correctLetters = 0;

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(guess, solution) {
  const solutionArray = solution.split('');
  const guessArray = guess.split('');
  let targetIndex = null;
  for(let i = 0; i < solutionArray.length; i++){
    for(let j = 0; j < solutionArray.length; j++){
      if((i === j) &&  (solutionArray[i] === guessArray[i]) && (solutionArray[i] !== null)){
        solutionArray[i] = null;
        correctLetterLocation++;
        console.log('correctLettersLocation:', correctLetterLocation)
      }else if (i !== j){
      targetIndex = solutionArray.indexOf(guessArray[j]);
      console.log('targetIndex:', targetIndex)
      if(targetIndex > -1){
        correctLetters++;
        console.log('correctLetters:', correctLetters)
      }
    }
    if(guessArray[i] === solutionArray[i]){
      correctLetterLocation++
      solutionArray[i] = null;
      console.log('correctLetterLocation:', correctLetterLocation)
    }else{
      correctLetterLocation = 0;
    }
  }
  return `${correctLetterLocation}-${correctLetters}`
}


function mastermind(guess) {
  solution = 'abcd'; 
  if(guess === solution){
    console.log("You guessed it!")
  }else{
    const hint = generateHint(guess, solution);
    return hint;
  }
}

// const acceptableGuess = (guess) => {
//   if (guess.length === 4){
//   let allLettersLegal = true;
//   const guessArr = guess.split('');
//   guessArr.forEach((letter) => {
//     if(letters.indexOf(letter) === -1){
//       allLettersLegal = false;
//     }
//   })
// }


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
