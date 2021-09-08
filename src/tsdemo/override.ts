function makeDate(timestamp: number): Date; // 重载签名1
function makeDate(m: number, d: number, y: number): Date; //重载签名2
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date { //兼容实现签名，不能被调用
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
// const d3 = makeDate(1, 3);// No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments.