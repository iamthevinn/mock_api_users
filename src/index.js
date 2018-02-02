import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './state/store';

const Root = () => (
    <Provider store={store} >
      <App />
    </Provider>
  )
  
  ReactDOM.render(<Root />, document.getElementById('root'));
  registerServiceWorker();