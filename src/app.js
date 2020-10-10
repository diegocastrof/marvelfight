import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import AppRouter from './routers/AppRouter';

import configStore from './store/configStore'

import 'normalize.css/normalize.css';
import 'materialize-css/dist/css/materialize.min.css';
import './styles/style.scss';


const store = configStore();

const jsx = (
  <Provider store = { store }>
    <AppRouter/>
  </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'))
