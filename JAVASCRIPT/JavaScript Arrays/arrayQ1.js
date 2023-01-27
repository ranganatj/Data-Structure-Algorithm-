//  Q.2  In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.
// Can you reach your friend's tile number in the next roll? Create a function that takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any dice roll.
// Examples
// possibleBonus(3, 7) true
// possibleBonus(1, 9) false
// possibleBonus(5, 3) false


const possible = (a, b) => {
    let x = a;
    let y = b;
    for (let i = 1; i <= 6; i++) {
      x += 1;
      if (x === y) {
        return true;
      } 
    }
    return false;
  };
  
  console.log(possible(3, 7));
  console.log(possible(1, 9));
  console.log(possible(5, 3));
  console.log(possible(5, 5));