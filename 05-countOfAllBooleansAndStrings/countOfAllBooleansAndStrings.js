function countOfAllBooleansAndStrings(arr) {
  // Insert code here;

  let totalBooleansStrings = 0
  for(let item of arr){
    //console.log(typeof(item))
    if(typeof(item) === "boolean" || typeof(item) === "string"){

      totalBooleansStrings++
    }
  }

  return totalBooleansStrings
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;