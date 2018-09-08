import React from 'react'

// style
import './title.scss'

export default ({
    children,
    id,
    className,
    size,
    onDarkBackground,
    uppercase
}) => {
    return (
        <div
            className={`title ${className || ''} ${size || ''} ${onDarkBackground ? 'white' : ''} ${uppercase ? 'uppercase' : ''}`}
            id={id}
        >
            {children}
        </div>
    )
}
