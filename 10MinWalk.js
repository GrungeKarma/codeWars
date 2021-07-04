function isValidWalk(walk) {
  //insert brilliant code here
  let test = walk.sort();
  let test1 =test.toString();

  let ape = test1.split('n').length -1;
  let monkey = test1.split('s').length -1;
  let chimp = test1.split('e').length -1;
  let lemur = test1.split('w').length -1;
  console.log(ape);
  console.log(monkey);

  if (ape === monkey && chimp === lemur){

    if (walk.length  === 10){
      return true;
    }else{
      return false;
    }
  }else{
    return false;
  }
}
isValidWalk(['n','n','n','s','n','s','n','s','n','s']);
