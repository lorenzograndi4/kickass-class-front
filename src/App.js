import React, { Component } from 'react'
import logo from './logo.svg'
import Title from './components/Title'
import './App.css'

class App extends Component {

  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <Title content='Batch #9' />
      </div>
    );
  }
}

export default App;
