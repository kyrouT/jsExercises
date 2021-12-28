// findTheWord(["E>R","R>S","S>O","O>N","P>E"]) 

function findTheWord(a){
    console.log(a);
    let split = [];
    let len = a.length;
    let original = a;
  
    
    let firstLetter = [],
        secondLetter =[],
        currentIndex = 0,
        count = {},
        letter;
    
    
    while(currentIndex<len){
      firstLetter.push(a[currentIndex].charAt(0));
      secondLetter.push(a[currentIndex].charAt(2));
      
      recordLetter(count, a[currentIndex].charAt(0), a[currentIndex].charAt(2));
      //console.log(count);
      currentIndex++;
    }
    
    // console.log(firstLetter, secondLetter, count);
   
    // The first letter should be in firstLetter array 
    // and has count of 1.
    let first;
    for(let c in count){
      if(count[c] === 1){
        if(firstLetter.indexOf(c) >= 0) first = c;
      }
    }
    
    
    let result = first;
    currentIndex = firstLetter.indexOf(first);
    let times = 0;
    while(times < len){
      result += secondLetter[currentIndex];
      currentIndex = firstLetter.indexOf(secondLetter[currentIndex]);
      
      times++;
    }
  
    console.log(result);
    return result;
  }
  
  
  function recordLetter(count, letter1, letter2){
  
    count[letter1] = count[letter1] ? count[letter1]+1 : 1;
    count[letter2] = count[letter2] ? count[letter2]+1 : 1;
    
    return count;
  }
  
findTheWord(["E>R","R>S","S>O","O>N","P>E"])
