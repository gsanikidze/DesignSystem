import React from 'react'

// style
import './paragraph.scss'

export default ({
    children,
    id = '',
    className = '',
    size = '',
    onDarkBackground = false,
    uppercase = false,
    bold = false,
    style = {},
}) => {
    return (
        <div
            className={`paragraph ${className} ${size} ${onDarkBackground ? 'white' : ''}${uppercase ? 'uppercase' : ''} ${bold ? 'bold' : ''}`}
            id={id}
            style={style}
        >
            {children}
        </div>
    )
}
