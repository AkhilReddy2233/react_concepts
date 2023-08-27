import React from "react"

const UpdatedComponent = (OriginalComponent, incrementNumber )=>{
    class NewCoponent extends React.Component{
        constructor(props) {
            super(props);
            console.log(props)
          
            this.state = {
               counter:0
            }
          }
          handleClick = ()=>{
              this.setState(prevState =>{
                  return {
                      counter : prevState.counter + incrementNumber
                  }
              })
          }
        render(){
            return <OriginalComponent 
            count={this.state.counter} 
            incrementCounter={this.handleClick}
            {...this.props}
            />
        }
    }
    return NewCoponent
}

export default UpdatedComponent