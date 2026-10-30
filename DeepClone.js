function deepCopy(original){
   let copy=JSON.parse(JSON.stringify(original))
return copy;

}

let original= { a: 1, b: { c: {1:9, 2:6} } }
let copy=(deepCopy(original))


// copy.b.c.push(3);


copy.b.c[2]=60;
console.log(copy)
console.log(original)
