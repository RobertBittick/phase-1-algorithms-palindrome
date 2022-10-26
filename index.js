
  // Write your algorithm here
  function isPalindrome(string){
    const arrayValues = string.split('')
    const reverseArrayValues = arrayValues.reverse()
    const reverseString = reverseArrayValues.join('')
    if (string === reverseString) {
      return true
    } else {
      return false
    }
  }
isPalindrome('robot')

/* 
  Add your pseudocode here

  function takes a string and checks if it is a palindrome
  if it is, return true
  if it is not, return false
*/

/*
  Add written explanation of your solution here

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
