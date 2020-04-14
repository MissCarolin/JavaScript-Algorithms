const dublicateNumber = arr => {
return arr.some((num, index) => arr.indexOf(num) !==index)
};

console.log(dublicateNumber([1, 2, 3, 1]));



const dublicateNumber2 = arr => {
const newArr = arr.sort((a, b) => {
return a - b })
for(let i = 0; i < newArr.length - 1; i++) {
    if(newArr[i] == newArr[i + 1]){
      return true
    }
  }

  return false
};
console.log(dublicateNumber2([1, 2, 3, 1]));
