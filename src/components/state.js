import React, { useState,Component } from 'react';
import { sculptureList } from '../data/data';

export function State(){
    return(
    <>
        {/* <Clock/> */}
        {/* <UseStateExample/> */}
    </>

    )
}
function UseStateExample() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  let hasPrev = index > 0;
  let hasNext = index < sculptureList.length - 1;

  function handleNextClick() {
    if(hasNext){
        setIndex(index + 1);
    }
  }

  function handlePrevClick(){
    if(hasPrev){
        setIndex(index - 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }


  let sculpture = sculptureList[index];
//   console.log(useState());
  return (
    <>
      <button onClick={handlePrevClick} disabled={!hasPrev}>
        Previous
      </button>
      <button onClick={handleNextClick} disabled={!hasNext}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
        console.log(this.state);
    }
    componentDidMount(){
        this.timerID = setInterval(()=>{
            this.tick();
        },1000);
    }

    componentWillUnmount(){

    }
    tick(){
        this.setState({
            date: new Date(),
        });
    }
    render(){
        return (
            <div>
                <h1>Hello, World</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}
