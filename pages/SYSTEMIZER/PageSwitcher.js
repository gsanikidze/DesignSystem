import React from 'react'

// pages
import {
    Typography
} from './pages'

export default ({ component }) => {
    switch (component) {
        case 'typography':
            return <Typography />
        default:
            return <div>Systemizer</div>
    }


}
