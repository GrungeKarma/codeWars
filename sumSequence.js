const sequenceSum = (begin, end, step) => {
  if (begin > end){
    return 0;
  }else{
    let ans = [];
    for(let i = begin; i <= end; i += step){
      ans.push(i);
    }
    console.log(ans);
    let solution = ans.reduce((acc, curr) => acc + curr);
    return solution;
  }
};
console.log(sequenceSum(1, 5, 1));
