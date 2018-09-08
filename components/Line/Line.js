import React from 'react'

// styles
import './line.scss'

export default ({
    className,
    id
}) => <div className={`line ${className || ''}`} id={id} />
