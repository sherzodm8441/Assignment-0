function pairSum(nums, target) {
  // Insert code here;
  if(nums.length <= 1){
    throw new Error("error thrown")
  }
  for(let i = 0; i < nums.length - 1; i++){
    for(let j = i + 1; j < nums.length; j++){
      if(nums[i] + nums[j] === target){
        return true
      }
    }
  }
  return false
}
//console.log(pairSum([20,20], 20))
// Do not edit this line;
module.exports = pairSum;