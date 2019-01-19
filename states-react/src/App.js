import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
  }
  render() {
    return (
      <div>
        <p onMouseOver={console.log("hello")}>User is logged {this.state.isLoggedIn ? "yes" : "no"}</p>
        <button onClick={() => { this.setState({ isLoggedIn: true }) }}>Login</button>
      </div>
    );
  }
}

export default App;
