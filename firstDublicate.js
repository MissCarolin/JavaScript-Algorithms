const firstDublicate = arr => {
  let duplicateObject = {};

  for(let i = 0; i < arr.length; i++ ) {
    if(duplicateObject[arr[i]] !== undefined)
      return arr[i];
    else
    duplicateObject[arr[i]] = - i;
  }
  return -1;


};

console.log(firstDublicate([2, 3, 3, 4, 8, 2]));

/* Other Option */

const firstDublicate2 = arr => {
  let duplicateObject = {};

  for(let num of arr) {
    if(duplicateObject.hasOwnProperty(num)) {
      return num;
    }
    duplicateObject[num] = num;
  }
  return -1;
}

console.log(firstDublicate2([2, 3, 4, 8, 2]));
