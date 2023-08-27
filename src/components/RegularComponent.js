import React, { Component } from 'react'

export default class RegularComponent extends Component {
  render() {
    console.log('Regular Component')

    return (
      <div>
        regular Component {this.props.parentName}
      </div>
    )
  }
}
