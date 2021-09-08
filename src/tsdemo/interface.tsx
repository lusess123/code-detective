// Lib a.d.ts
interface Point {
  x: number,
  y: number
}
declare const myPoint: Point

// Lib b.d.ts
interface Point {
  z: number
  bb(): number
}

// Your code
myPoint.z // Allowed!
myPoint.x 


class MyPoint implements Point {

  z1: number = 123
  aa(a: string): string {
    throw new Error("Method not implemented.")
  }
  bb(): number {
    throw new Error("Method not implemented.")
  }
  // z1: number = 4
  x: number = 1
  y: number = 2
  z: number = 3
}

class MyPoint2 implements MyPoint {
  aa(a: string): string {
    throw new Error("Method not implemented.")
  }
  bb(): number {
    throw new Error("Method not implemented.")
  }
  z1: number = 1
  x: number = 2
  y: number =3
  z: number =4 
}
