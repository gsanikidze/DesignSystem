import React from 'react'

// style
import './paragraph.scss'

export default ({
    children,
    id,
    className,
    type,
    onDarkBackground
}) => {
    return (
        <div
            className={`paragraph ${className || ''} ${type || ''} ${onDarkBackground ? 'white' : ''}`}
            id={id}
        >
            {children}
        </div>
    )
}
