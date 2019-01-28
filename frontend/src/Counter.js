import React, { Component } from 'react'

class Counter extends Component {
  // YOUR CODE GOES BELOW
  state = {
    // Counter
    count: 0
  }

  // ClickHandler for Incrementing Counter
  handleAddClick = () => {
    this.setState(({count}) => ({
      count: count + 1
    }));
  }

  // ClickHandler for Decrementing Counter
  handleSubtractClick = () => {
    this.setState(({count}) => ({
      count: count - 1
    }));
  }

  render() {
    return (
      <div>
        <button> Counter: {this.state.count} </button>
        <br/>
        <button onClick={this.handleAddClick}> + </button>
        <button onClick={this.handleSubtractClick}> - </button>
      </div>
    )
  }
}

export default Counter
