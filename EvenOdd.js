function checkEvenOdd(num){
if(num%2===0){
    return "Even";
}
else{
    return "Odd"
}
}



let n=20
for(let i=0;i<n;i++){
 console.log(i+":"+checkEvenOdd(i))
}