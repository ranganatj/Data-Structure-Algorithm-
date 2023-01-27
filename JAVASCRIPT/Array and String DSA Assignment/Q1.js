

// Question 1 : Write a program to print to duplicate elements of an array .

// Sample_input : [1,1,2,3,3,4,5,6,6]

// Sample_ouptut : 1,3,6

function duplicateArray(array) {
    var object = {};
    var result = [];

    array.forEach(function (item) {
      if(!object[item])
          object[item] = 0;
        object[item] += 1;
    })

    for (var property in object) {
       if(object[property] >= 2) {
           result.push(property);
       }
    }

    return result;

}

console.log(duplicateArray([1,1,2,3,3,4,5,6,6]));