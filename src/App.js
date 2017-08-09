import React, { PureComponent } from 'react'
import './App.css'

class App extends PureComponent {
  updateStudent (id, update) {
     // something
  }

  render() {
    return (
      <div className="App">
        { this.props.children }
      </div>
    );
  }
}

export default App;
