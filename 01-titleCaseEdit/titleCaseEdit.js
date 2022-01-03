function titleCaseEdit(title) {
  // Insert code here;
  title = title.split(" ")
  title = title.map(word => word.charAt(0).toUpperCase() + word.slice(1))
  const capWords = []
  for(let i = 0 ; i<title.length;i++){
    capWords.push(title[i].charAt(0) + title[i].slice(1))
  }

  return capWords.join(" ")
}


// Do not edit this line;
module.exports = titleCaseEdit;