type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
  };
  interface IDescribableFunction {
    description: string;
    (someArg: number): boolean;
  }
  function doSomething(fn: DescribableFunction, fn1: IDescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
    console.log(fn1.description + " returned " + fn1(6));
  }


  // 示例 A
declare var foo1  : 123;
// 示例 B
declare let foo11  : 123;
// 示例 C
let foo12 : 123 = 123 ;
// 示例 D
var foo13 : 123 = 123 ;
// 示例 E
const foo14 : 123 = 123 ;
// 示例
declare const foo15 : 123;


foo1 + 1
foo11 + 1
foo15 + 1

interface Error {
  name: string;
  message: string;
  stack?: string;
}

interface ErrorConstructor {
  new(message?: string): Error;
  (message?: string): Error;
  readonly prototype: Error;
}

declare var Error: ErrorConstructor;

Error + ""

interface EvalError extends Error {
}

declare type ddd = ErrorConstructor
type ddd2 = ErrorConstructor