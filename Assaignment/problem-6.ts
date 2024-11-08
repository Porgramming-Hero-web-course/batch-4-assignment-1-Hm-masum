{
    interface Profile  {
        name: string;
        age:number;
        email:string
    }

    const updateProfile = <Profile, Q > (profile:Profile , param: Q) => {
        return{...profile,...param}
    }

    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile,  {age: 26}));

}