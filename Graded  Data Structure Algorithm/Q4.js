

function getArrayDepth(value) {
    return Array.isArray(value) ? 
      1 + Math.max(0, ...value.map(getArrayDepth)) :
      0;
  }
  
  
  
  let myArray = [1, 2, 3, 4];
  let myArray2 = [1, [2, [3, 4]]];
  console.log(myArray);
  console.log(getArrayDepth(myArray));
  console.log(myArray2);
  console.log(getArrayDepth(myArray2));
