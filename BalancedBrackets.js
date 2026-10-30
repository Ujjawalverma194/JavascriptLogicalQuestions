// function BalancedBrackets(str){
//     let obj={};
//      for(char of str){
//         if(obj[char]){
//             obj[char]++;
//         }
//         else{
//             obj[char]=1;
//         }
//      }
//     return obj
// }

// console.log(BalancedBrackets("{[()]}"));



// function BalancedBrackets(str){
//  let result=[];

//  for(i=0;i<str.length;i++){
//     if(str[i]=="{" || str[i]=="(" || str[i]=="["){
//         result.push(str[i])
//     }
//     else{
//         console.log("Hello")
//         result.splice(i,2)
//     }
//  }
 
// console.log(result)
 

// }



// BalancedBrackets("{[()}]")





function isBalanced(str) {
  let stack = [];

  for (let char of str) {
      
    if (char === "{" || char === "(" || char === "[") {
      stack.push(char);
    }
    else {
        
      if (stack.length > 0) {
          
        let top = stack[stack.length - 1];

        if ( top === "{" && char === "}" || top === "(" && char === ")" || top === "[" && char === "]" ) {
          stack.pop();
        } 
        else {
          return false;
        }
      } 
      else {
        return false;
      }
    }
  }
  if(stack.length === 0 ) {
      return true;
  }
  else {
      return false;
  }
}

console.log(isBalanced("({[]})"));