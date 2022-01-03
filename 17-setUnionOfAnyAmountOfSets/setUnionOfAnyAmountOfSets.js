function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  const finalSet = new Set()
  for(let arg of args){
    //console.log(arg)
    arg.forEach((val) => {
      finalSet.add(val)
    })
  }

  //console.log(finalSet)
  return finalSet
}

//setUnionOfAnyAmountOfSets(new Set([ 1, 2, 4 ]), new Set([ 4, 5, 6 ]), new Set( [6, 7, 8 ]))
// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;