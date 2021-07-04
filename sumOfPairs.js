function sumPairs(ints, s) {

let answer = [];
for(let i = 0; i < ints.length; i++){
  //console.log(ints[i]);
  for(let k = 0; k < ints.length; k++){

    if (ints[i] + ints[k] === s){
      answer.push(ints[i]);
      answer.push(ints[k]);
      break;
    }
  }
}
//console.log(answer);
let finalAnswer = answer.slice(0, 2);
//console.log(finalAnswer);
return (finalAnswer);
}

console.log(sumPairs([11, 3, 7, 5], 10));
