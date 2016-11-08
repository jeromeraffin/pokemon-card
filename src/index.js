import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {data} from './data/data';

import 'normalize.css/normalize.css';
import './css/style.css';




ReactDOM.render(
  <App pokedex={data} />,
  document.getElementById('root')
);
