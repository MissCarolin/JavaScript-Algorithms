const capitalisedStrings = str => {
const singleWords = str.split(' ')

upperCaseWords = singleWords.map(word => word.charAt(0).toUpperCase() + word.slice(1));

return upperCaseWords = upperCaseWords.join(' ')
}

console.log(capitalisedStrings('hello there i like pizza'));
