import React, { PureComponent } from 'react'
import logo from './logo.svg'
import Class from './components/Class'
import './App.css'

class App extends PureComponent {
  updateStudent (id, update) {
     // something
  }

  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <Class updateStudent={ this.updateStudent.bind(this) } />
      </div>
    );
  }
}

export default App;
