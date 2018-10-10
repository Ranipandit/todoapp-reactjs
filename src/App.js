import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './input';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="header-text">Todo Application</h1>
        </header>
        <Input />
      </div>
    );
  }
}

export default App