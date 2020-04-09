/* PseudoCode
Problem: find out how many Valleys Gary travelled through
Define when he walkes walks up and count +1
Define when he walks a down and count -1
for walking a valley he cant walk more steps up than down
count the valleys that match these steps criteria
*/

function countingValleys(n, input) {
const array = input.split('');
console.log(array)


let valleys = 0;
let walk = 0;

for(let step = 0; step < array.length; step++) {
  if(array[step] == 'U')  {
    walk++;

  } else if(array[step] == 'D'){
    walk--;
    if(walk == -1) {
      valleys++
    }
  }

};
  console.log(valleys);


};


countingValleys(8,'DUDUUUDD')
