import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      character: {}
    }
  }
  componentDidMount() {
    fetch("https://swapi.co/api/people/1/")
      .then(Response => Response.json())
      .then(data => this.setState(
        {
          loading : false,
          character: data
        })
      )
  }
  render() {
    return (
      <div className="App">
        {this.state.loading ? "Loading" : this.state.character.name}

      </div>
    );
  }
}

export default App;
