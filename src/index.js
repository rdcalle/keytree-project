import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';  
import { store } from './redux';
import 'antd/dist/antd.css'; 
import App from './App';
import registerServiceWorker from './services/registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
