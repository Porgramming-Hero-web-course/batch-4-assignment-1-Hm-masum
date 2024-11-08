{
    
    function removeDuplicates( arr:number[]):number[]{
        const finalArray : number[] = [];
        finalArray.push(arr[0])

        for(let i:number=1; i<arr.length; i++){
            for(let j:number=0; j<finalArray.length; j++){
                if(arr[i]===finalArray[j]){
                    break;
                }
                if(j===(finalArray.length-1)){
                    finalArray.push(arr[i])
                    break;
                }
            }
        }
        return finalArray
    }


    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))
}