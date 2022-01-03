function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  let min = nums[0]
  let max = 0
  for(let num of nums){
    if(num <= min){
      min = num
    }
    if(num >= max){
      max = num
    }
  }

  return min + max
}

//console.log(sumOfMinimumAndMaximum([2,4,5,6,23]))

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;