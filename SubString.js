function longestSubstring(str) {
    let maxLength = 0;
    for (let i = 0; i < str.length; i++) {
        let currentSubstring = ""; 
        for (let j = i; j < str.length; j++) {
            if (currentSubstring.includes(str[j])) {
                break; 
            }
            currentSubstring =  currentSubstring + str[j];
            if (currentSubstring.length > maxLength) {
                maxLength = currentSubstring.length;
            }
        }
       
    }
     return maxLength;
    
}
console.log(longestSubstring("abcdaaddbc"));