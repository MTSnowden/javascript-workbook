'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};


function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece() {
  // Your code here
  

}

function isLegal(startStack, endStack) {
  // Your code here
  if ((startStack === 'a' || startStack === 'b' || startStack === 'c') && 
      (endStack === 'a' || endStack === 'b' || endStack === 'c')) {
        if (stacks[startStack].length-1 < stacks[endStack].length) {
          return true;
        }else{
          return false;
        }
  } else {
    console.log("Invalid entry");
  }
}

function checkForWin() {
  // Your code here
 if (stacks.c.length === 4) {
   console.log("You win!");
 }else{ 
   getPrompt();
 }
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
if (isLegal(startStack, endStack)) {
  movePiece(startStack, endStack);
  checkForWin(startStack, endStack);
} 
 
  }


function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      
    });
  });
}


// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
