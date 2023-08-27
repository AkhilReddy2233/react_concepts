import React, { Component } from 'react'
import UpdatedComponent from './HOCComponent'

class HoverCounter extends Component {
    // constructor(props) {
    //     super(props)
      
    //     this.state = {
    //        counter:0
    //     }
    //   }
    //   handleClick=()=>{
    //       this.setState(prevState =>{
    //           return {
    //               counter : prevState.counter + 1
    //           }
    //       })
    //   }
  render() {
    const {count, incrementCounter} = this.props
    return (
      <div>
        <h2 onMouseOver={incrementCounter}>Hovered {count} times</h2>
      </div>
    )
  }
}

export default UpdatedComponent(HoverCounter,10)
