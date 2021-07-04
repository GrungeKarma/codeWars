function sumOfMinimums(...arr) {
  let ans = [];
  arr.forEach(arr =>{
    console.log(arr);
    let min = arr.reduce((a, b)=> Math.min(a, b));
    console.log(min);
    ans.push(min);
  });
  let finalAns = ans.reduce((a, b) => a += b);
  console.log(finalAns);
  return (finalAns);
}

console.log(sumOfMinimums([7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]));
/*
let min = arr.reduce((a, b)=> Math.min(a, b));
ans.push(min);
*/
