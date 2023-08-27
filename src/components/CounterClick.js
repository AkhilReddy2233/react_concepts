import React, { Component } from 'react'
import UpdatedComponent from './HOCComponent'

class CounterClick extends Component {

  render() {
    console.log(this.props)
    const {count, incrementCounter} = this.props;
    return (
      <div>
        <h4>HOC Topic</h4>
        <button onClick={incrementCounter}>clicked {count} times</button>
      </div>
    )
  }
}

export default UpdatedComponent(CounterClick,5)