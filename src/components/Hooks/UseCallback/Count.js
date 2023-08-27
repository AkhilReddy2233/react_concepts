import React from 'react'

function Count({age,value}) {
    console.log(`Render ${value} Component]`)
  return (
    <div>
    {value} - {age}
    </div>
  )
}

export default React.memo(Count)
