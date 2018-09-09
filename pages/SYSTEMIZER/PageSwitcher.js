import React from 'react'

// pages
import {
    MainStyles,
    Typography
} from './pages'

export default ({ component }) => {
    switch (component) {
        case 'typography':
            return <Typography />
        default:
            return <MainStyles />
    }


}
