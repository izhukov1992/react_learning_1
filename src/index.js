import React from 'react';
import { render } from 'react-dom'

import { createStore } from 'redux'

import './index.css';
import App from './App';

import todoApp from './reducers'

const store = createStore(todoApp)

render(<App store={store} />, document.getElementById('root'));

