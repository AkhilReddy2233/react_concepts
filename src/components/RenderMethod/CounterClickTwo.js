import React, { Component } from 'react'

class CounterClickTwo extends Component {
  render() {
    console.log('render counterclick');
    const {count, incrementCount} = this.props
    return (
      <div>
        <h4>Render prop topic</h4>
        <button onClick={incrementCount}>Clicked {count} times</button>
      </div>
    )
  }
}

export default CounterClickTwo
