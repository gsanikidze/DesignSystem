import React from 'react'

// styles
import './line.scss'

export default ({
    className = '',
    id = '',
    style = {},
}) => <div className={`line ${className}`} id={id} style={style} />
