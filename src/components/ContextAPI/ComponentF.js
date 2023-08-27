import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class ComponentF extends Component {
  render() {
    return (
        <UserConsumer>
            {username =>{
                return <div>
                    <h4>ContextAPI</h4>
                    <h6>Hello {username}</h6>
                </div>
            }}
        </UserConsumer>
    )
  }
}

export default ComponentF
