import React, { isValidElement } from 'react';
import { compile } from './compile';

const result = compile(`
  <View id="test" :name="'111'" @click="alert()">
    <Form>
      <p>This is my vue render test</p>
    </Form>
    <Row>my name is {{myName}}</Row>
  </View>`);

console.log(result);
export default () => {
  return <div>{renderJson(result)}</div>;
};

export const json = (obj, replacer?, space?) => {
  const _replacer = replacer || null;

  const _space = space || 2;

  return JSON.stringify(obj, _replacer, _space);
};

const handleCircular = () => {
  const cache: any[] = [];
  const keyCache: any[] = [];
  return (key: any, value: any) => {
    if (typeof value === 'object' && value !== null) {
      if (isValidElement(value)) {
        return null;
      }
      const index = cache.indexOf(value);

      if (index !== -1) {
        return `[Circular ${keyCache[index]}]`;
      }

      cache.push(value);
      keyCache.push(key || 'root');
    }

    return value;
  };
};

export const renderJson = (value: any, replacer?: any, space?: any) => {
  const _replacer = replacer || handleCircular();

  const _json = JSON.stringify(value, _replacer, space);

  const _res = JSON.parse(_json);

  return (
    <pre>
      <code>{json(_res)}</code>
    </pre>
  );
};
