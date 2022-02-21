import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './demo/SlideVerify';
import Test from './demo/Test';
import '@babel/polyfill'

ReactDOM.render(
  <>
  <Demo />
  <Test />
  </>,
  document.getElementById('app')
);
