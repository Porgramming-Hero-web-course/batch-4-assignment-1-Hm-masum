{
    const validateKeys= <T> (obj:T, Keys:(keyof T)[]) =>{
        let flag:number =0;
        for(let i:number =0;i<Keys.length;i++){
            if(!obj[Keys[i]]){
                flag=1;
            }
        }
        if(flag === 1){
            return false
        }
        else{
            return true
        }
    }

    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "age", "email"]));  
}