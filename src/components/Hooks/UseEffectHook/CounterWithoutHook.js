import React, { Component } from 'react'

class CounterWithoutHook extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    incrementCount= ()=>{
        console.log(this.state)
        this.setState(prevState=>{
          return {
            count:prevState.count+1
          }
        })
    }
    componentDidMount(){
        document.title = `Clicked ${this.state.count} times`
    }
    componentDidUpdate(){
        document.title = `Clicked ${this.state.count} times`
    }
  render() {
    return (
      <div>
        <button onClick={()=>this.incrementCount()}>
            Click {this.state.count} times
        </button>
      </div>
    )
  }
}

export default CounterWithoutHook
