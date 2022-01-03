function sumOfAllEvenNumbers(nums) {
  // Insert code here;
  let total = 0
  for(let num of nums){
    if(num % 2 === 0){
      total++
    }
  }

  return total
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;