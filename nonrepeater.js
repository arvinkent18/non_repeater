const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const getFirstNonRepeatingChar = (str) => {
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i)

    if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
      return char
    }
  }

  return null
}

const reorderString = (str) => {
  let strList = []
  let once = 0

  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i)
    
    if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
       if(once == 0) {
         strList.unshift(char)
         
         once +=1
       }
       else {
         strList.splice(once, 0, char)
         
         once +=1 
       }
    }
    else if (str.indexOf(char) == i && str.indexOf(char, i + 1) == 1) {
      strList.push(char)
    }
    else {
      strList.push(char)
    }
  }
  
   return strList.join('')
}

readline.question('Enter string: ', (str) => {
  console.log(`Non-repeating character is: ${getFirstNonRepeatingChar(str.toLowerCase())}`)
  console.log(`Reordered string: ${reorderString(str.toLowerCase())}`)

  readline.close()
})
