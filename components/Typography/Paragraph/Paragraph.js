import React from 'react'

// style
import './paragraph.scss'

export default ({
    children,
    id,
    className,
    size,
    onDarkBackground,
    uppercase,
    bold
}) => {
    return (
        <div
            className={`paragraph ${className || ''} ${size || ''} ${onDarkBackground ? 'white' : ''}${uppercase ? 'uppercase' : ''} ${bold ? 'bold' : ''}`}
            id={id}
        >
            {children}
        </div>
    )
}
