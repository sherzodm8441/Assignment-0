function frequencyCounter(word) {
  // Insert code here;
  const frequency = {}

  for(let i = 0; i< word.length; i++){
    if(word.charAt(i) in frequency){
      frequency[word.charAt(i)] = frequency[word.charAt(i)] + 1 
    }else{
      frequency[word.charAt(i)] =  1
    }
  }
  return frequency
}

//console.log(frequencyCounter("apple"))

// Do not edit this line;
module.exports = frequencyCounter;