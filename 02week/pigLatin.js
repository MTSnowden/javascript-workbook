'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



  function translatePigLatin(str) {
    const vowel = /[aeiou]/;
    let translated = "";
    const vowelIndex = str.indexOf(str.match(vowel)[0]);
    if(str[0].match(vowel)) {
      translated = str + "way";
    } else {
      translated = str.substr(vowelIndex) + str.substr(0, vowelIndex) + "ay";
    }
    return translated;
  
  }
  
  translatePigLatin('mike');




function getPrompt() {
  rl.question('str', (answer) => {
    console.log( translatePigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
 