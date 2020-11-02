import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import {createStore} from 'redux'
import {AppReducer} from './todoapp/reducers-index'

const store = createStore(AppReducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>  
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

