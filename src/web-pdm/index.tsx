import React from 'react';
import ReactDom from 'react-dom';
import WebPdm from 'web-pdm';
import ModelTest from '../../test/g6-test/mock/model-test';
import ModuleTest from '../../test/g6-test/mock/module-test';
import '../../test/style.less';

export default () => {
  return <WebPdm models={ModelTest} modules={ModuleTest} key="codedemo" />;
};

//ReactDom.render(<Page />, document.getElementById('app'))
