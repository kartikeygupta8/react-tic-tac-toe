 import React from 'react'

const Block = ({mark, changeMark, position}: any) => {
  return (
    <div data-testid="1" className= {`Block mark${mark}`} onClick={(e)=>changeMark(position)}>
          
    </div>
  )
}

export default Block