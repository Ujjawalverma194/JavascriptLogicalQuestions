// function SumOfDigits(num){
//     let sum=0;
//     while(num>0){
//         let digit=num%10;
//          sum=sum+digit;
//         num=Math.floor(num/10);
//     }
//     return sum;
// }

// console.log(SumOfDigits(4512))


function sum(arr){
   return arr.reduce((a,b)=>a+b,0)
}


let num=123
let str=String(num)
let arr=str.split("")
console.log(arr)
let total=sum(arr)
console.log(total)


