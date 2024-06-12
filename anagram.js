const CHAR=256;
const anagram=(str1,str2)=>{
  const charArr=new Array(CHAR).fill(0)
  if(str1.length !== str2.length){
    return false
  }
  for(let i=0 ;i<CHAR;i++){
    charArr[str1.charCodeAt(i)]++;
  //  console.log( charArr[str1.charCodeAt(i)]++)
    charArr[str2.charCodeAt(i)]--;
    
  }
  for(let i=0;i<CHAR;i++){
    if(charArr[i] !==0) return false
  }
  return true;
}

console.log(anagram('silent','listen'))