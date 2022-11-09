const hasUniqueChars = (word) => {
    let newWord = new Set(word)
  if(newWord.size === word.length){
    return true
  }
    return false
  
  }
  console.log(hasUniqueChars("Bob"))