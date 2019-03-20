import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      states: []
    }
  }
  async componentDidMount() {
    const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/states')
    const result = await response.json()
    this.setState({ states: result })
  }
  render() {
    return (
      this.state.states.map((state) => {
        return <p>{state.name}</p>
      })
    )
  }
}

export default App;
