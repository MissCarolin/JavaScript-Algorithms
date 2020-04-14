const longestWord = str => {
const longest = str.split(',').sort((a,b) => b.length - a.length);
return longest[0].trimLeft()
}

console.log(longestWord('Ready, steadyyyyy, go'));

