import React from 'react'

function Title(props) {
    console.log(`Render ${'Title'} Component]`)
  return (
    <div>
      <h4>{props.children}</h4>
    </div>
  )
}

export default React.memo(Title)
// export default Title
