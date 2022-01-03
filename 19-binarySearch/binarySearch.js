class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    if(nums.length === 1 && nums[0] != target){
      //console.log("target " + target + " num" + nums[0])
      return false
    }
    let mid = Math.floor((nums.length / 2))
    if(nums[mid] === target){
      return true
    }else if(target < nums[mid]){
      //console.log("lower")
      return this.binarySearch(nums.slice(0, mid), target)
    }else{
      return this.binarySearch(nums.slice(mid), target)
    }
  }

  // binarySearchRecursive(nums, target, start, end){

   
  //   console.log("called")
  //   if(start > end){
  //     return false
  //   }

  //   let mid = Math.floor((start + end) / 2) 
  //   if(nums[mid] === target ){
  //     //console.log("true")
  //     return true
  //   }else if(nums[mid] > target){
  //     return this.binarySearchRecursive(nums, target, start, mid - 1)
  //   }else{
  //     return this.binarySearchRecursive(nums, target, mid + 1, end)
  //   }
  
}
// let obj = new MySolution
// console.log( obj.binarySearch([11,12,13,14,15,16,17,18,19,20], 13))
// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;