/*
Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples:

number([]) // => []
number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]
*/




let number=function(array){
  if (array.length === 0){
    return array;
  }else {

    let answerArr = [];

    array.forEach((line, index) => {
      answerArr.push(`${index + 1}: ${line}`);
    });
    return answerArr;
  }
};
console.log(number(["a","b","c"]));
