// Q63 - Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.

type Shape = Circle | Rectangle | triangle;

type Circle = {
  type: "circle";
  radius: number;
};

type Rectangle = {
  type: "rectangle";
  width: number;
  height: number;
};

type triangle = {
  type: "triangle";
  base: number;
  height: number;
};

function area(shape: Shape): number {
  switch (shape.type) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.width * shape.height;
    case "triangle":
      return (shape.base * shape.height) / 2;
    default:
      return 0;
  }
}

const circle: Circle = {
  type: "circle",
  radius: 10,
};

const rectangle: Rectangle = {
  type: "rectangle",
  width: 10,
  height: 20,
};

const triangle: triangle = {
  type: "triangle",
  base: 10,
  height: 20,
};

console.log(area(circle));

console.log(area(rectangle));

console.log(area(triangle));

// 2nd way to calculate
console.log(area({
    type: 'circle',
    radius: 10
}));

console.log(area({
    type: 'rectangle',
    width: 10,
    height: 20
}));

console.log(area({
    type: 'triangle',
    base: 10,
    height: 20
}));
