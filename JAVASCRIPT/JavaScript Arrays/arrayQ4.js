
// Q4. Given an array, write a function to calculate its depth. Assume that a normal array has a depth of 1.

function depth(obj) { 
    var maxdepth = 0; 
    if ( typeof obj == 'object' ) // object or array 
      for ( var key in obj ) { 
        var dpth = depth( obj[key] ); 
        if ( dpth > maxdepth ) 
          maxdepth = dpth; 
      } 
    return maxdepth + 1; 
  } 
  let testRy = [1,2,[3,4,[5,6],7,[8,[9,91]],10],11,12]
  console.log(testRy);