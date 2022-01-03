function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  let total = 1

  for(let arg of args){
    total = total * arg
  }

  return total
}

//console.log(productOfAnyAmountOfNumbers(3,4,5))
// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;