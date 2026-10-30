
// WITHOUT INBUILT FUNCTIONS
function Largest(a,b,c){
    if(a>b && a>c){
        return a;
    }
    else if(b>a && b>c){
        return b;
    }
    else{
        return c;
    }
}

console.log(Largest(4,19,7))
console.log(Largest(-2,-8,-1))


//USING BUILT IN METHODS 

function largest(a,b,c){
    return Math.max(a,b,c);

}
console.log(largest(-4,-19,-7))