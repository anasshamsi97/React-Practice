import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
      this.setState(prevState => {
        return { isLoggedIn: !prevState.isLoggedIn }
      })
  }

  render() {
    return (
      <div>
        <button onClick = {this.handleClick}>{this.state.isLoggedIn ? "logout":"login"}</button>
        <p>{this.state.isLoggedIn ? "login" : "logout"}</p>
      </div>
    );
  }
}

export default App;
