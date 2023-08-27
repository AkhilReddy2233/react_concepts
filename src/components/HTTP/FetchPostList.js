import axios from 'axios'
import React, { Component } from 'react'

export class FetchPostList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts:[],
       errorMsg:''
    }
  }
  
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response=>{
      console.log(response);
      this.setState({posts:response.data.slice(0,5)})
    }).catch(error=>{
      console.log(error);
      this.setState({errorMsg: error.message})
    })
  }

  render() {
    const {posts, errorMsg} = this.state
    return (
      <div>
        <h4>Fetch Using Axios</h4>
        List of posts
        {
          posts.length ?
          posts.map(post=><div key={post.id}>{post.title}</div>) : null
        }
        {
          errorMsg ? <div>{errorMsg}</div> : null
        }
      </div>
    )
  }
}

export default FetchPostList
