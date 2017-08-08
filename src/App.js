import React, { PureComponent } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends PureComponent {
  updateStudent (id, update) {
     // something
  }

  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          { this.props.children }
      </div>
    );
  }
}

export default App;
