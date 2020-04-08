
/* find the amount of different integers/sock colors in the array
/* turn the array integers into strings so that their value doesn't add up when adding them together
/* add the number of the same colored socks/integers together/reduce method
/* divide by 2 and floor the number */


const sockMerchant = (n, ar) => {
 const newar = ar.split(' ', n);
 console.log(newar);

  let colors = newar.reduce(function(obj, item) {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
  }, {});
console.log(colors)

const singleSocks = (Object.values(colors))
console.log(singleSocks)

const sockPairs = singleSocks.map(sock => Math.floor(sock/2));
console.log(sockPairs)

const total = sockPairs.reduce((total, sock) => {
    return total + sock;
    }, 0);

console.log(total)

};


sockMerchant(9, '10 20 20 10 10 30 50 10 20');
