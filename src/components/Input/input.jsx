import React, {forwardRef} from 'react'
import './input.css'


function Input (props) {
    // console.log(props, ref)
  return (
    <input className='input'
    //   ref={ref}
      {...props}
    />
  )
}

export default Input
