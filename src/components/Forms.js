import React, { Component } from 'react'

export default class Forms extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         topic: 'react'
      }
    }
    
    handleUsernameChange = (event)=>{
        this.setState({
            username: event.target.value
        })
    }
    handleTextareaChange = (event)=>{
        this.setState({
            comments: event.target.value
        })
    }
    handleTopicChange = (event)=>{
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = (event) =>{
        alert(`${this.state.username} ${this.state.textarea} ${this.state.topic} `);
        event.preventDefault();
    }

  render() {
    const {username, comments , topic} = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <div>
            <label>Username</label>
            <input type='text' value={username} onChange={this.handleUsernameChange}/>
        </div>
        <div>
            <label>Comments</label>
            <textarea type='text' value={comments} onChange={this.handleTextareaChange}/>
        </div>
        <div>
             <label>Topic</label>
            <select value={topic} onChange={this.handleTopicChange}>
                <option value='react'>react</option>
                <option value='angular'>angular</option>
                <option value='vue'>vue</option>
            </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
      </div>
    )
  }
}
