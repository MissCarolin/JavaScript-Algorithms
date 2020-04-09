const longestStringlength = str => {
const newString = str.split(' ')
const longString = (newString.sort((word1, word2) => word1.length > word2.length ? -1 : 1) [0]);

console.log(longString)
}

longestStringlength('I lssve a goood veggipizza');
