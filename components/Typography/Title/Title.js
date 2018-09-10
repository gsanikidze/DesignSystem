import React from 'react'

// style
import './title.scss'

export default ({
    children,
    id = '',
    className = '',
    size = '',
    onDarkBackground = false,
    uppercase = false,
    style = {},
}) => {
    return (
        <div
            className={`title ${className} ${size} ${onDarkBackground ? 'white' : ''} ${uppercase ? 'uppercase' : ''}`}
            id={id}
            style={style}
        >
            {children}
        </div>
    )
}
