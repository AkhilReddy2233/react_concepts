import React from 'react'

function ButtonCounter(props) {
    console.log(`Render ${props.children} Component]`)

  return (
    <div>
      <button onClick={props.onClick}>{props.children}</button>
    </div>
  )
}

export default ButtonCounter
