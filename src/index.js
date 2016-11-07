import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const data = [
    {id: 1, name: "Pikachu", number: 25, type:'electric'},
    {id: 2, name: "Charizard", number: 6, type:'fire'},
    {id: 3, name: "Jigglypuff", number: 39, type:'fairy'}
];

ReactDOM.render(
  <App pokedex={data} />,
  document.getElementById('root')
);
