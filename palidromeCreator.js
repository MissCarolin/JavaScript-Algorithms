

function PalindromeCreator(str) {

  if (isPalindrome(str)) {
  return "palindrome"
  }

//testing with one character
  for (let i = 0; i < str.length; i++) {
      let shortString = str.slice(0, i) + str.slice(i +  1);
      if (isPalindrome(shortString) && shortString.length >= 4) {
          return str[i];
      }
  }

//testing with two characters
  for (let i = 0; i < str.length; i++) {
      shortString = str.slice(0, i) + str.slice(i + 1);
    for (let j = 0; j < shortString.length; j++) {
      let shorterString = shortString.slice(0, j) + shortString.slice(j + 1);
      if (isPalindrome(shorterString) && shorterString.length >= 5)  {
        return str[i] + shortString[j]
      }
    }
  }
  // code goes here
return "not possible";
}

// check if string is palidrome function
function isPalindrome (str){
  return str === str.split('').reverse().join('');

}

// keep this function call here
console.log(PalindromeCreator('mmop'));
