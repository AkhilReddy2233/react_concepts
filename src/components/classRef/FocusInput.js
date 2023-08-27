import React, { Component } from 'react'
import { ForwardInput, Input } from './Input'

export class FocusInput extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      this.componentRef = React.createRef()
      this.inputRefForward = React.createRef()
    }
    handlerClick = ()=> {
        // this.componentRef.current.foucsInput();
        this.inputRefForward.current.focus()
    }
  render() {
    return (
      <div>
        Class Reference
        {/* <Input ref={this.componentRef}/> */}
        <ForwardInput ref={this.inputRefForward}/>
        <button onClick={this.handlerClick}>Click</button>
      </div>
    )
  }
}

export default FocusInput
