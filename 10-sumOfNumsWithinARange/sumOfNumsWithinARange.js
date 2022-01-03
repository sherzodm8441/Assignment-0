function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  let total = 0
  for( let num of nums){
    
    if(num >= start && num <= end){
      //console.log("added")
      total++
    }
  }

  return total
}



// Do not edit this line;
module.exports = sumOfNumsWithinARange;