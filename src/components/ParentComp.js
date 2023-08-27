import React, { Component } from 'react'
import ChildComponent from './ChildComponent';
import RegularComponent from './RegularComponent';
import PureComp from './PureComponent';
import Memo from './Memo';

export default class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'Parent'
      }
      this.greetParent = this.greetParent.bind(this);
    }

    componentDidMount(){
      // setInterval(()=>{
      //   this.setState({
      //     parentName:'Parent',
      //   })
      // },2000)
    }
    greetParent(child){
        alert(`Hello ${this.state.parentName} from ${child}`)
    }
    
  render() {
    console.log('Parent Component')
    return (
      <div>
        <ChildComponent greet={this.greetParent}/>
        ParentComp
        {/* <RegularComponent name={this.state.parentName}/>
        <PureComp name={this.state.parentName}/> */}
        <Memo name={this.state.parentName}/>  
        {/* Pure components for functinal components as memos */}
      </div>
    )
  }
}
