function Table(num){
    let mul=[];
    let count=0;
    for(let i=1;i<=10;i++){
        mul[count]=num*i;
        count++;
    }
    return mul;
}


let num=3
let mul=Table(num);

for(let i=0;i<mul.length;i++){
    console.log(`${num}*${i+1}=${mul[i]}`)
}