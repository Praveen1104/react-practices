function findLongest(sentence){

    let wordsArray=sentence.split(" ")
    console.log(wordsArray)
    let longestword="";
    for(let i=0;i<wordsArray.length;i++){
        if(wordsArray[i].length > longestword.length){
            longestword=wordsArray[i]
        }

    }
    console.log(longestword)
}
findLongest("hi everyone how are you")