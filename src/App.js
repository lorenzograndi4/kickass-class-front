import React, { PureComponent } from 'react'
import './App.css'
import Navigation from './components/Navigation'

class App extends PureComponent {
  updateStudent (id, update) {
     // something
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className="App">
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default App;
