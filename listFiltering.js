function filter_list(l) {
  // Return a new array with the strings filtered out
let ans = [];
l.forEach(monkey =>{
    if (typeof monkey === 'number'){
    ans.push(monkey);
  }
  return;
});
return ans;
}


console.log(filter_list([1,2,'aasf','1','123',123]));
