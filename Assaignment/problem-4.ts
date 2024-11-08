{
    type Rectangle = {
      shape: "rectangle";
      width: number;
      height: number
    }

    type Circle ={
      shape: "circle";
      radius: number
    }

    type ShapeArea =  Circle | Rectangle;

    const calculateShapeArea = (shape: ShapeArea) => {
      if(shape.shape === "circle"){
        const result=(Math.PI * shape.radius * shape.radius).toFixed(2);
        return result;
      }
      else if(shape.shape === 'rectangle'){
        const result = (shape.width * shape.height);
        return result;
      }
    }
    

    
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    const rectangleArea = calculateShapeArea({
      shape: "rectangle",
      width: 4,
      height: 6,
    });
    console.log(circleArea)
    console.log(rectangleArea)

}