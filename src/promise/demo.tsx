import React from 'react';
import MyPromise from './index';
import nextTick from './tick';
import Soon from './soon';

const fun = () => {
  debugger;

  const p = new MyPromise((s, f) => {
    setTimeout(() => {
      s(+new Date() + '===1');
    }, 200);
  });
  p.then(a => alert(a) || 234).then(a => alert(a + '   2'));
};

const soon = () => {
  Soon(() => {
    alert('Soon');
  });
};

const next = () => {
  nextTick(() => {
    alert('nextTick');
  });
};

export default () => {
  return (
    <>
      <button onClick={fun}>触发</button>&nbsp;
      <button onClick={soon}>soon</button>&nbsp;
      <button onClick={next}>next</button>
    </>
  );
};
