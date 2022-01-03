function countOfAllBooleans(arr) {
  // Insert code here;
  let totalBooleans = 0
  for(let item of arr){
    //console.log(typeof(item))
    if(typeof(item) === "boolean"){

      totalBooleans++
    }
  }

  return totalBooleans


}
//console.log(countOfAllBooleans(["hello", "world", 3, "nice", 99, Infinity, -Infinity, true, true, true, false]))
// Do not edit this line;
module.exports = countOfAllBooleans;