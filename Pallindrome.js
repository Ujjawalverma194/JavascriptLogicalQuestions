function Pallindrome(str) {
    let rev = "";
    let newStr=str.toLowerCase()
    
    for (let i = newStr.length - 1; i >= 0; i--) {
       if(str[i]===" "){
        continue;
       }
        rev = rev + newStr[i];
    }
    console.log("String:-"+ str)
    console.log("Reverse:-"+ rev)
    if (rev === newStr) {
        return true;
    }
    else {
        return false;
    }
}


console.log(Pallindrome("Rac ecar"))



// function Pallindrome(str){
//     let arr=str.split("")
    
//     console.log(arr)
// }

// Pallindrome("Ra cecar")