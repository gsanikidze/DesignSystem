import React from 'react'

// components
import Line from 'COMPONENTS/Line'
import { Paragraph } from 'COMPONENTS/Typography'

export default ({ children }) => (
    <div>
        <Paragraph bold size="small">{children}</Paragraph>
        <Line />
    </div>
)
