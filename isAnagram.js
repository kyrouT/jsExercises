// Create a function called isAnagram, which given two strings, returns true if they are anagrams of one another.
// For example: `Listen` is an anagram of `Silent`
// isAnagram(..., ...); should return true
  
function isAnagram(first,second) {
    if (first.length != second.length) {
        return false
    } else {
        let count = 0;
        first = first.toLowerCase();
        second = second.toLowerCase();
        for (let i=0; i< first.length; i++) {
            for (let j=0;j < second.length; j++) {
                if (first.charAt(i) == second.charAt(j)){
                    count++
                }
            }
            
        }
        if (count !== first.length) {
            return false
            
        } else {
            return true
        }
    }

} 
   

    

let v = isAnagram('Listen','Silent');
console.log(v);
  
