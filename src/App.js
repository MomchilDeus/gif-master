import React, { Component } from 'react';

import './App.css';
import { Input } from './components/Input'
import { Gif } from './components/Gif'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Gif Master</h1>
        <Gif embedURL={this.props.embedURL} />
        <Input 
          randomGif={this.props.randomGif}
          fetchGif={this.props.fetchGif} />
      </div>
    );
  }
}

export default App;
