const reverseString = string => {
  const array = string.split('').reverse().join('')
}


const reverseString2 = word => {
  let reversedWord = '';

  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
};
reverseString2('codegod');
