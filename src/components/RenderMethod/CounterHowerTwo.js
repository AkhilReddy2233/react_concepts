import React, { Component } from 'react'

class CounterHowerTwo extends Component {
  render() {
    const {count ,incrementCount} = this.props;
    return (
      <div>
        <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
      </div>
    )
  }
}

export default CounterHowerTwo
