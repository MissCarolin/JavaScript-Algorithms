const digitSum = str => {
  const nums = str.split(' ').map(Number).filter((number) =>  {
  return number;
  });

  const total = nums.reduce((a, b) => (a + b), 0);
  return total

};
console.log(digitSum('2 apples, 12 oranges'));

/* ALTERNATIVE 2*/

const digitSum2 = str => {
  const nums = str.match(/\d+/g || []);
  let sum = 0;

  nums.forEach((num) => {
      sum += Number(num)
  });
  return sum;
}

console.log(digitSum2('2 apples, 12 oranges'));
