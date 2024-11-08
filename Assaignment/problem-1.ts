{

    function sumArray ( arr : number[]): number {
        let sum:number=0;
        arr.map((ele:number):number => sum += ele)
        return sum;
    }

    console.log(sumArray([1, 2, 3, 4, 5]))
}