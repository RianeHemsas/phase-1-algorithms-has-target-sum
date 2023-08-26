function hasTargetSum(array, target) {
  // Write your algorithm here

    for ( let i=0 ;i<array.length-1;i++){
      for (let j = i + 1; j < array.length; j++) {
     let sum= array[i] + array[j];
    //  console.log(sum);
    
    if(sum===target){
      return true;
    }
    }

     }
   return false;

    }
 


/* 
  Write the Big O time complexity of your function here

 we have two nested loops ,the outer  loop iterates for n-1 ,
 and the inner  loop for n-i-1 , after removing the constants  for both 
 it becomes O(n) a linear time complexity , together it would be O(n*2)
  and more simple O(n).

*/

/* 
  Add your pseudocode here

  iterate over the array until the case before the last 
  iterate a seconde time from the case 1 until the length of the array 
  initialize a variable called sum with sum of two elements 
  if sum is equal to target 
  return true 

  if the two loops ended without any match found 
  return false
*/

/*
  Add written explanation of your solution here

  write a function that takes the sum of every two pair in an array and then
  compares the sum to the 'target' argument , if sum was equal to target it returns true,
  otherwise it return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4] , 5));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3] , 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4] , 4));
  
}


module.exports = hasTargetSum;
