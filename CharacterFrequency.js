function  frequency(str){
   let freq={};

   for(let char of str){
     
       if(freq[char]){
        freq[char]++;
       }
       else{
        freq[char]=1;
       }
        if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u"){
        freq[char]="vowel"
      }
   }

   return freq;

}

console.log(frequency("banana"))

