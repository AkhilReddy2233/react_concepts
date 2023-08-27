import React, { Component } from 'react'

export default class ReferenceComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
    
      }
      this.inputRef = React.createRef()
    }
    componentDidMount(){
        this.inputRef.current.focus();
    }
    handleClick = ()=>{
        alert(this.inputRef.current.value);
    }
  render() {
    return (
      <div>
        <h5>ReferenceComp</h5>
        <input type='text' ref={this.inputRef}/>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}
