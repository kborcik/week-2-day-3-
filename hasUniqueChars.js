// Write your code below

function uniqueChars (string){
    let uniqueCharSet = new Set ([])
   for (let i = 0; i < string.length; i++){
    uniqueCharSet.add(string[i])
   }
   return uniqueChars.size === string.length
}


const hasUniqueSet = str => new Set(str).size === str.length


