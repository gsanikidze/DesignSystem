import React from 'react'

// styles
import './button.scss'

export default ({
    children,
    className,
    id,
    onClick
}) => {
    return (
        <button
            className={`button ${className}`}
            id={id}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
