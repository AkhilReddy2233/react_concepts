import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props){
        super(props);
        this.state = {
            count:0
        }
        console.log(this);
        this.increment = this.increment.bind(this);
    }
    // increment(){
    //     // this.setState({
    //     //     count: this.state.count + 1
    //     // },()=>{
    //     //         console.log(this.state.count);
    //     //     })
    //     this.setState((prevState) => ({
    //         count: prevState.count + 1
    //         }),()=>{
    //             console.log(this.state.count);
    //     })
    // }  

    increment = () => {
      this.setState((prevState) => ({
        count: prevState.count + 1
        }),()=>{
            console.log(this.state.count);
    })
    }
    
    incrementByFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
  render() {
    return (
      <div>
        <h4>count : {this.state.count}</h4>
        {/*<button onClick={this.incrementByFive.bind(this)}>Increase Count</button>*/}
        <button onClick={()=>{this.increment()}}>Increase Count</button>
        <button onClick={this.increment}>Increase Count</button>
      </div>
    )
  }
}

