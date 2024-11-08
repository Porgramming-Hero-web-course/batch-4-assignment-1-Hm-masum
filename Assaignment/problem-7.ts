{
    class Car {
      make: string;
      model: string;
      year: number;

      constructor(make: string,model: string,year: number){
        this.make =make,
        this.model =model,
        this.year =year
      }

      getCarAge(){
        return `${2024 - this.year} (assuming current year is 2024)`;
      }
    }

    const car = new Car("Honda", "Civic", 2018);
    const age =car.getCarAge();
    console.log(age)
}