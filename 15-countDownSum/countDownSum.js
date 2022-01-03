class MySolution {
  countDownSum(num) {
    // Insert code here;
    if(num === 1){
      return num
    }
    return num + this.countDownSum(num - 1)

   
  }
  
  
}
//let obj = new MySolution
//console.log(obj.countDownSum(5))

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;