import React from 'react';
import ReactDom from 'react-dom';
import WebPdm from 'web-pdm';
import ModelTest from './g6-test/mock/model-test';
import ModuleTest from './g6-test/mock/module-test';
import './style.less';

const Page = () => {
  return <WebPdm models={ModelTest} modules={ModuleTest} />;
};

ReactDom.render(<Page />, document.getElementById('app'));
