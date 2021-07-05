import React from 'react';
import ReactDOM from 'react-dom';
import { CustomerApp } from './CustomerApp';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <CustomerApp />
  </Provider>,
  document.getElementById('root')
);

