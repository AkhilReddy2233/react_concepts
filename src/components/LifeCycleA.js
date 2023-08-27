import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export class LifeCycleA extends Component {

    constructor(props) {
      super(props)
      this.state = {
         name:'Akhil'
      }

      console.log('lifecycleA constructor')
    }
    handleClick = () =>{
        this.setState({
            name:'reddy'
        })
    }
    static getDerivedStateFromProps(props,state) {
        console.log(' LifeCycleA getDerivedStateFromProps');
        return {}
    }
    getSnapshotBeforeUpdate(){
        console.log(' LifeCycleA getSnapshotBeforeUpdatef')
        return null
    }
    componentDidUpdate(){
        console.log(' LifeCycleA componentDidUpdate')
    }
    componentDidMount(){
        console.log('LifeCycleA componentDidMount')

    }
    
    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')
        return true;
    }

    render() {
        console.log('LifeCycleA render')
        return (
        <div>
            <h4>Life Cycles Topic</h4>
            LifeCycleA
            <button onClick={this.handleClick}>Click</button>
            <LifeCycleB />
        </div>
        )
    }
}

export default LifeCycleA
