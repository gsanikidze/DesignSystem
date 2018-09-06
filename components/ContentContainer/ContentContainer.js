import React from 'react'

// styles
import './content_container.scss'

export default ({ children }) => {
    return (
        <div id="content_container">
            <div className="container">
                {children}
            </div>
        </div>
    )
}
