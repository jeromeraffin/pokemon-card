import React, { Component } from 'react';
import 'normalize.css/normalize.css';
import './App.css';
import CardList from './Card/CardList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CardList list={this.props.pokedex}/>
      </div>
    );
  }
}

export default App;
