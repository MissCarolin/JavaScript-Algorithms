const digitSum = str => {
  const array = str.split(' ').map(Number).filter((number) =>  {
  return number;
  });

  const total = array.reduce((a, b) => (a + b), 0);
  return total

};
console.log(digitSum('2 apples, 12 oranges'));
