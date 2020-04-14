/*
1. split the string into an array of single character strings
2. fill the array with the characters from the given array repeating the given order
3. find out the amount of a's in that array and return it
*/

function repeatedString(str, num) {
const newArr = str.split('')
const filledArray = new Array(num).fill(str).join('').slice(0, num)
const finalArray = filledArray.split('')
console.log(finalArray)
let count = 0
finalArray.forEach(item => {
if(item == 'a') {
count += 1
}
})
return count
};

console.log(repeatedString('aba', 10));
