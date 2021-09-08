import { SSS  } from './demo'


function add(a: number, b: number): number {
    return a + b;
  }
  
  describe("add function", () => {
    it("1 + 1 = 2", () => {
      const ddd = SSS()
      console.log(ddd)
      expect(add(SSS(), 1)).toEqual(2);
    });
  });