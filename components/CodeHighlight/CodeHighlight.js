import React from 'react'
import Highlight from 'react-highlight'

// components
import { Title } from 'COMPONENTS/Typography'

// styles
import './codeHighlight.scss'

export default ({ title, children }) => {
    return (
        <div className="code_highlight">
            {
                title ? (
                    <header>
                        <Title size='tiny'>{title}</Title>
                    </header>
                ) : null
            }
            <section className={title ? '' : 'full_rounded'}>
                <Highlight>{children}</Highlight>
            </section>
        </div>
    )
}
