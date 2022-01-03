function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  let total = 0
  for(let num of nums){
    if(num < target){
      total++
    }
  }
  return total
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;