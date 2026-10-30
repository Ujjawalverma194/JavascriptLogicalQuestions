// Q2. Find the First Non-Repeating Character
// Given a string, return the first character that appears exactly once. If every character repeats, return an
// appropriate result such as null.
// Example 1
// const str = "aabbcddee";
// // Output: "c"
// Example 2
// const str = "swiss";
// // Output: "w"

function FirstNonRepeatingCharacter(str) {
    let freq = {}
    for (let i = 0; i < str.length; i++) {
        if (freq[str[i]]) {
            freq[str[i]]++;
        }
        else {
            freq[str[i]] = 1;
        }
    }
    for(let key in freq){
        if(freq[key]==1){
           return key;
        }
    }
    return null
}

console.log(FirstNonRepeatingCharacter("nittin"))