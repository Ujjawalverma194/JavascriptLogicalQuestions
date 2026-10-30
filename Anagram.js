function isAnagram(str1, str2) {
 
  if (str1.length !== str2.length) return false;

  let freq1 = {};
  let freq2 = {};

 
  for (let char of str1) {
    if(freq1[char]){
        freq1[char]++;

    }
    else{
        freq1[char]=1;
    }
  }

  
  for (let char of str2) {
     if(freq2[char]){
        freq2[char]++;

    }
    else{
        freq2[char]=1;
    }
  }
//    console.log(freq1)
//    console.log(freq2)
  
  for (let key in freq1) {
    
    if (freq1[key] !== freq2[key]) {
      return false;
    }
  }


  return true;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "billion"));
