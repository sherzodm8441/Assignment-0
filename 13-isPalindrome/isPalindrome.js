function isPalindrome(word) {
  // Insert code here;
  if(word.length === 1){
    return true
  }

  for(let i = 0; i < word.length; i++){
    if((word.charAt(i) != word.charAt(word.length - 1 - i))){
        return false
    }
  }
  return true
}
//console.log(isPalindrome("w"))
// Do not edit this line;
module.exports = isPalindrome;