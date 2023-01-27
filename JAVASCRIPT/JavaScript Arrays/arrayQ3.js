
 // Q5. Given a letter, created a function which returns the nearest vowel to the letter. If two vowels are equidistant to the given letter, return the earlier vowel.

function nearestVowel(s) {
    let obj = { a: 99, e: 99, i: 99, o: 99, u: 99 };
    let min = 99;
    let solution = "";
    for (let character of [..."aeiou"]) {
      let different = Math.abs(character.charCodeAt(0) - s.charCodeAt(0));
      if (different < min) {
        min = different;
        solution = character;
      }
    }
    return solution;
  }
  console.log(nearestVowel("m"))