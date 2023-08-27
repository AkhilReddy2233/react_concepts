import React from 'react'

function Memo({name}) {
    console.log('memo Component')
  return (
    <div>
     Memo {name}
    </div>
  )
}

export default React.memo(Memo);