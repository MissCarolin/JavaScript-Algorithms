const factorialLoop = num => {
  let product = 1;
  for ( let i = 1; i <= num; i++) {
    console.log(i)
    product *= i;
  }
  return product ;
}
console.log(factorialLoop(5));
