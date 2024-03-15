import React from 'react'

import './Button.css'

function Button({children, ...others}) {
    // console.log({children, ...others})
    return (
        <button className='btn' {...others}>
            {children}
        </button>
    )
}

export default Button