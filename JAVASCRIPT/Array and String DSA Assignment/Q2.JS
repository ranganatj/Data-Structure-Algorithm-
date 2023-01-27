
// Question 2 : Write a program to find the element with highest frequency in an array.

// Sample_input :[1,2,4,3,2,4,2,5,7,2]

// Sample_output :2

var myArray=[1,2,4,3,2,4,2,5,7,2];
var highestFrequency = 1;
var frequency = 0;
var item;
for (var i=0; i<myArray.length; i++)
{
        for (var j=i; j<myArray.length; j++)
        {
                if (myArray[i] == myArray[j])
                 frequency++;
                if (highestFrequency < frequency)
                {
                  highestFrequency = frequency; 
                  item = myArray[i];
                }
        }
        frequency=0;
}
  console.log(item+ " ( " +highestFrequency +" times ) ") ;
