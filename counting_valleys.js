/* PseudoCode
Problem: find out how many Valleys Gary travelled through
Define when he walkes a mountain (UD) and set that equal to 0 because we don't want to count that
Define when he walks a valley (DU)
Define, that the valley is only a valley if he walks as many step down as he walks up again, set tha equal to 1 to count his valleys
Define, that for walking a valley he cant walk more steps up than down
count the valleys that match these steps criteria
count downs and ups, if downs + ups equal and startet with D it means one valley = 1
*/

function countingValleys(n, input) {
const array = input.split('');
console.log(array)

// const ups = array.filter(i => i === 'U').length
// const downs = array.filter(i => i === 'D').length

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
