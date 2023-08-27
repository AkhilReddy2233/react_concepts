import React, { Component } from 'react'

export class Input extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      this.inputRef = React.createRef();
    }
    foucsInput() {
        this.inputRef.current.focus();
    }
  render() {
    console.log('input renderr')
    return (
      <div>
        <input type='text' ref={this.inputRef}/>
      </div>
    )
  }
}


// export function ForwardInput() {
//   return (
//     <div>
//      <input type='text' ref={this.inputRef}/> 
//     </div>
//   )
// }

export const ForwardInput =React.forwardRef ((props,ref) =>{
    console.log('')
    return (
        <div>
            <input type='text' ref={ref}/> 
        </div>
    )
})