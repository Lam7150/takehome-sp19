import React, { Component } from 'react'
import Counter from './Counter'

class App extends Component {
  // YOUR CODE GOES BELOW
  
  render() {
    return (
      <div>
        <p> {this.props.name} </p>
        <Counter initialCount={this.props.episodes_seen}/>
      </div>
    )
  }
}

export default App
