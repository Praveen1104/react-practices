function findReverse(string){
    let reverse=""

    for(let i=string.length-1;i>=0;i--){
        reverse+=string[i]
    }
    console.log(reverse)

}
findReverse("Developer one position")