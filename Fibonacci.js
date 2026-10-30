function Fibonacci(n){
    let arr=[];
    let a=0;
    let b=1;
   arr.push(a)
   arr.push(b)
    for(let i=1;i<=n-2;i++){
        let c=a+b;
        a=b;
        b=c;
         arr.push(b);
  
    }

    return arr
}
console.log(Fibonacci(10))




