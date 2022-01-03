function fizzBuzz(start, end) {
  // Insert code here;
  const arr = []
  for(let i = (start) ; i< (end + 1); i++){
    if(i % 3 === 0 && i % 5 === 0){
      arr.push("FizzBuzz")
    }else if(i % 5 === 0){
      arr.push("Buzz")
    }else if(i % 3 === 0){
      arr.push("Fizz")
    }else{
      arr.push(i)
    }
  }

  return arr
}
console.log(fizzBuzz(1, 15))

// Do not edit this line;
module.exports = fizzBuzz;