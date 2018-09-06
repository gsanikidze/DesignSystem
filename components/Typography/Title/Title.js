/********
* This is Main Title Component
* I`ts Recievs Children And Then Returns It
* You Can Also Pass Id and Classes From Parent
* There Is Two Type Of Title: 'large' and 'tiny'
* If onDarkBackground Parameter Is True Title Will Be White
********/

import React from 'react'

// style
import './title.scss'

export default ({
    children,
    id,
    className,
    type,
    onDarkBackground
}) => {
    return (
        <div
            className={`title ${className || ''} ${type || ''} ${onDarkBackground ? 'white' : ''}`}
            id={id}
        >
            {children}
        </div>
    )
}
