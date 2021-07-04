function list(names){
  let ans = [];

  names.forEach((element,index) => {
    if (names.length === 1){
      return(element.name);
    }
    else if (index <= (names.length - 3)){

      ans.push(element.name + ", " );

    }
    else if (index <= (names.length - 2)){

      ans.push(`${element.name} `);

    }
    else if (index >= (names.length - 1)){
      ans.push("& " + element.name);

    }else{
      return 'something went wrong';
    }


  });
  return (ans.join(''));
  //your code here
}
console.log(list([{name: 'Bart'}]));
