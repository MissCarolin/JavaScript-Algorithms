const checkPalidrome = word => {
  newWord = word.replace(/\s|[0-9_]|\W|[#$%^&*()]/g, "").toLowerCase()
  reversedWord = newWord.split('').reverse().join('').toLowerCase()

    return reversedWord === newWord

};

console.log(checkPalidrome(':Anna'));
