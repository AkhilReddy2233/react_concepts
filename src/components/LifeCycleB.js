import React, { Component } from 'react'

export class LifeCycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'Akhil'
      }
      console.log('lifecycleB constructor')
    }
    
    static getDerivedStateFromProps(props,state) {
        console.log(' LifeCycleB getDerivedStateFromProps')
        return {};
    }
    getSnapshotBeforeUpdate(){
        console.log(' LifeCycleB getSnapshotBeforeUpdatef')
        return null;
    }
    componentDidUpdate(){
        console.log(' LifeCycleB componentDidUpdate')
    }

    componentDidMount(){
        console.log('LifeCycleB componentDidMount')
    }

    shouldComponentUpdate(){
      console.log('LifeCycleB shouldComponentUpdate')
      return true;
    }

  render() {
    console.log('LifeCycleB render')
    return (
      <div>
        LifeCycleB
      </div>
    )
  }
}

export default LifeCycleB
