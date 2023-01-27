
//  Q.3.  Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

const arrayOfMultiples = (a , b) => {
    let arr = [];
    let x = 1;
    for (let i = 1; i <= b; i++) {
      arr.push(a * x);
      x++;
    }
    return arr;
  };
  
  console.log(arrayOfMultiples(7, 5));
  console.log(arrayOfMultiples(12, 10));
  console.log(arrayOfMultiples(17, 6));