function findConsective(array,number){

    let maxCount=0;
    let currentConsCount=0;

    for(let i=0;i<=array.length;i++){
        if(array[i]===number){
            currentConsCount+=1;
            maxCount=Math.max(currentConsCount,maxCount)
        }
        else{
            currentConsCount=0;
        }
    }
    console.log(maxCount)
}

const array=[1,4,2,3,4,4,4,5,5,5,1,1,1,1,7,7,7,7,]
findConsective(array,7)