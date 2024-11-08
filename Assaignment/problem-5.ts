{
    const getProperty = <T,Q extends keyof T> (person:T, param:Q) => {
        return person[param]
    }

    const person = { name: "Alice", age: 30 };
    console.log(getProperty(person, "age"));
}
