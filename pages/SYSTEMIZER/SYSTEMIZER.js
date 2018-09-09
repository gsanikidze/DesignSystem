import React, { Component } from 'react'

//components
import ContentContainer from 'COMPONENTS/ContentContainer'
import Sidebar from 'COMPONENTS/Sidebar'
import PageSwitcher from './PageSwitcher'

// other
import navItems from 'DB/navItems'

// styles
import './systemizer.scss'
import 'STYLES/code_highlight.scss'

export default class DefaultLayout extends Component {
    static async getInitialProps({ query }) {
        return {
            query
        }
    }
    render() {
        return (
            <div id="systemizer">
                <Sidebar title='Systemizer' navigationItems={navItems} />
                <ContentContainer>
                    <PageSwitcher component={this.props.query.component} />
                </ContentContainer>
            </div>
        )
    }

}
