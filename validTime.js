const validTime = time => {
regexp = /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$/;
return regexp.test(time) ? true : false
};

console.log(validTime('25:15'))



const validTime2 = time => {
  let timeArray = time.split(':')

  if (Number(timeArray[0]) > 23) {
    return false;
  } else if (Number(timeArray[1]) > 59) {
    return false;
  } else {
    return true;
  }

}

console.log(validTime2('22:15'))
