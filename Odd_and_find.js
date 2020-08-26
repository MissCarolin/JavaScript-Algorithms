const findNumber = (arr, k) => {
    if (arr.includes(k)) {
        return "YES";
    } else {
        return "NO";
    }
}
console.log(findNumber([1,2,3,4,5], 3));

const oddNumbers = (l, r) => {
    const array = [];
    for (let i = l; i <= r; i ++) {
      array.push(i);
    }
    console.log(array)
  const newArray = array.filter(i => i%2)
  return newArray

};
console.log(oddNumbers(1,8))
