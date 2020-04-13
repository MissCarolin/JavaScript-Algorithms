const repeatedString = (str, number) => {
newString = number > 0 ? str.repeat(number) : ' '
return newString
}

console.log(repeatedString('google', 3));
