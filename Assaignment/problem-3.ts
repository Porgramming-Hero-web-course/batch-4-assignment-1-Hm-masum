{
    function countWordOccurrences (sentence:string,word:string):number{
        let count:number = 0;
        const wordOfArray: string[] = sentence.toLocaleLowerCase().split(" ")
    
        for(let i:number= 0; i<=wordOfArray.length; i++){
            if(wordOfArray[i] === word.toLocaleLowerCase()){
                count++;
            }
        }

        return count;
    }

    console.log(countWordOccurrences("I love typescript", "typescript"))
}